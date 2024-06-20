import pandas as pd
from sqlalchemy.orm import Session
from database import engine, SessionLocal
from models import Base, Product

def load_data(db: Session, csv_file: str):
    df = pd.read_csv(csv_file)
    for _, row in df.iterrows():
        # Convertir precio de string a float, eliminando el símbolo $
        price_str = row['Selling Price']
        list_price_str = row['List Price']
        
        if isinstance(price_str, float):  # Si ya es un float, no hacer nada
            price = price_str
        else:
            try:
                price = float(str(price_str).replace('$', '').replace(',', ''))
            except ValueError:
                price = 0.0  # Asignar un valor predeterminado en caso de error
        
        if isinstance(list_price_str, float):  # Si ya es un float, no hacer nada
            list_price = list_price_str
        else:
            try:
                list_price = float(str(list_price_str).replace('$', '').replace(',', ''))
            except ValueError:
                list_price = 0.0  # Asignar un valor predeterminado en caso de error

        product = Product(
            product_id=row['Uniq Id'],  # Nombre real de la columna
            product_name=row['Product Name'],
            brand_name=row['Brand Name'],
            category=row['Category'],  # Nombre real de la columna
            price=price,  # Precio convertido a float
            list_price=list_price,
            quantity=row['Quantity'],
            stock=row['Stock'],
            shipping_weight=row['Shipping Weight'],
            product_dimensions=row['Product Dimensions'],
            asin=row['Asin']
        )
        db.add(product)
    db.commit()

if __name__ == "__main__":
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    load_data(db, 'C:/Users/johan/Downloads/Prueba_Coyo/Prueba_Tecnica_Becario_Espot/Backend/Data/marketing_sample_for_amazon_com-ecommerce__20200101_20200131__10k_data.csv')
