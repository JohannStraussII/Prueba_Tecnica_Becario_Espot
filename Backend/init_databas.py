from sqlalchemy import create_engine
from database import Base, DATABASE_URL
from models import Product

engine = create_engine(DATABASE_URL)

# Crear las tablas si no existen
Base.metadata.create_all(bind=engine)
