from sqlalchemy import Column, Integer, String, Float
from database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    main_category = Column(String, index=True)
    sub_category = Column(String, index=True)
    image = Column(String)
    link = Column(String)
    ratings = Column(Float, nullable=True)
    no_of_ratings = Column(Integer, nullable=True)
    discount_price = Column(Float, nullable=True)
    actual_price = Column(Float, nullable=True)
