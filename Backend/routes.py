from quart import Blueprint, jsonify
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Product
import polar as pl

bp = Blueprint('api', __name__)

@bp.route('/api/categories', methods=['GET'])
async def get_categories():
    async with SessionLocal() as session:
        categories = session.query(Product.category).distinct().all()
        categories = [category[0] for category in categories]
        return jsonify(categories)

@bp.route('/api/products/<category>', methods=['GET'])
async def get_products_by_category(category):
    async with SessionLocal() as session:
        products = session.query(Product).filter(Product.category == category).all()
        df = pl.DataFrame([product.__dict__ for product in products])
        return jsonify(df.to_dict(orient='records'))
