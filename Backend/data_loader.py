import pandas as pd
from sqlalchemy.orm import Session
from database import engine, SessionLocal
from models import Base, Product

def load_data(db: Session, csv_file: str):
    df = pd.read_csv(csv_file)

    # Filtrar filas con valores null en las columnas críticas
    df = df.dropna(subset=['ratings', 'no_of_ratings', 'discount_price', 'actual_price'])

    for _, row in df.iterrows():
        try:
            ratings = float(row['ratings']) if row['ratings'] else None
        except ValueError:
            ratings = None
        
        try:
            no_of_ratings = int(row['no_of_ratings']) if row['no_of_ratings'] else None
        except ValueError:
            no_of_ratings = None
        
        try:
            discount_price = float(row['discount_price']) if row['discount_price'] else None
        except ValueError:
            discount_price = None
        
        try:
            actual_price = float(row['actual_price']) if row['actual_price'] else None
        except ValueError:
            actual_price = None

        # Ignorar filas que aún tengan valores None en las columnas críticas
        if ratings is None or no_of_ratings is None or discount_price is None or actual_price is None:
            continue

        product = Product(
            name=row['name'],
            main_category=row['main_category'],
            sub_category=row['sub_category'],
            image=row['image'],
            link=row['link'],
            ratings=ratings,
            no_of_ratings=no_of_ratings,
            discount_price=discount_price,
            actual_price=actual_price
        )
        db.add(product)
    
    db.commit()

if __name__ == "__main__":
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    load_data(db, 'C:/Users/johan/Downloads/Prueba_Coyo/Prueba_Tecnica_Becario_Espot/Backend/Data/Master_corrected.csv')
