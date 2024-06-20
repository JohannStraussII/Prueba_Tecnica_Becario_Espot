from sqlalchemy import Column, Integer, String, Float
from database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, unique=True, index=True)
    category = Column(String, index=True)
    price = Column(Float)
    rating = Column(Float)
    number_of_reviews = Column(Integer)
