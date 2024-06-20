from quart import Blueprint, jsonify
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Product

bp = Blueprint('api', __name__)

@bp.route('/api/main_categories', methods=['GET'])
async def get_main_categories():
    with SessionLocal() as session:
        categories = session.query(Product.main_category).distinct().all()
        categories = [category[0] for category in categories]
        return jsonify(categories)

@bp.route('/api/sub_categories', methods=['GET'])
async def get_sub_categories():
    with SessionLocal() as session:
        sub_categories = session.query(Product.sub_category).distinct().all()
        sub_categories = [sub_category[0] for sub_category in sub_categories]
        return jsonify(sub_categories)

@bp.route('/api/products', methods=['GET'])
async def get_products():
    with SessionLocal() as session:
        products = session.query(Product).all()
        result = [
            {
                'id': product.id,
                'name': product.name,
                'main_category': product.main_category,
                'sub_category': product.sub_category,
                'image': product.image,
                'link': product.link,
                'ratings': product.ratings,
                'no_of_ratings': product.no_of_ratings,
                'discount_price': product.discount_price,
                'actual_price': product.actual_price
            }
            for product in products
        ]
        return jsonify(result)
