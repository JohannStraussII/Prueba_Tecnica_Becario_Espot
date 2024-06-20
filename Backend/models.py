from sqlalchemy import Column, Integer, String, Float
from database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    main_category = Column(String, index=True)
    sub_category = Column(String, index=True)
    image = Column(String)
    link = Column(String)
    ratings = Column(Float)
    no_of_ratings = Column(Integer)
    discount_price = Column(Float)
    actual_price = Column(Float)
