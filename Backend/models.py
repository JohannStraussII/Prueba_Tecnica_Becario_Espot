from sqlalchemy import Column, Integer, String, Float
from database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(String, unique=True, index=True)
    product_name = Column(String)
    brand_name = Column(String)
    category = Column(String, index=True)
    price = Column(Float)
    list_price = Column(Float)
    quantity = Column(Integer)
    stock = Column(Integer)
    shipping_weight = Column(String)
    product_dimensions = Column(String)
    asin = Column(String, index=True)
