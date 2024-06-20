import pandas as pd
from sqlalchemy.orm import Session
from database import engine, SessionLocal
from models import Base, Product

def load_data(db: Session, csv_file: str):
    df = pd.read_csv(csv_file)
    for _, row in df.iterrows():
        product = Product(
            product_id=row['product_id'],
            category=row['category'],
            price=row['price'],
            rating=row['rating'],
            number_of_reviews=row['number_of_reviews']
        )
        db.add(product)
    db.commit()

if __name__ == "__main__":
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    load_data(db, 'C:/Users/johan/Downloads/Prueba_Coyo/Prueba_Tecnica_Becario_Espot/Backend/Data/marketing_sample_for_amazon_com-ecommerce__20200101_20200131__10k_data.csv') 
