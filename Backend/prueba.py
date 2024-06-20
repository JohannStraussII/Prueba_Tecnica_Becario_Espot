import pandas as pd

# Cargar el archivo CSV
df = pd.read_csv('C:/Users/johan/Downloads/Prueba_Coyo/Prueba_Tecnica_Becario_Espot/Backend/Data/marketing_sample_for_amazon_com-ecommerce__20200101_20200131__10k_data.csv')

# Imprimir los nombres de las columnas
print(df.columns)
