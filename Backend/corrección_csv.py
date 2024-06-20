import os
import pandas as pd
import re

# Especificar la ruta correcta del archivo Master.csv
file_path = r'C:\Users\johan\Downloads\Prueba_Coyo\Prueba_Tecnica_Becario_Espot\Backend\Data\Master.csv'

# Verificar si el archivo existe
if os.path.exists(file_path):
    # Leer el archivo CSV con la codificación correcta
    df = pd.read_csv(file_path, encoding='latin1')

    # Corregir los caracteres no deseados en las columnas de precios
    df['discount_price'] = df['discount_price'].astype(str).str.replace('â‚¹', '$').str.replace(',', '')
    df['actual_price'] = df['actual_price'].astype(str).str.replace('â‚¹', '$').str.replace(',', '')

    # Eliminar cualquier carácter no numérico restante y manejar valores nulos
    df['discount_price'] = df['discount_price'].apply(lambda x: re.sub(r'[^\d.]', '', x) if isinstance(x, str) else x)
    df['actual_price'] = df['actual_price'].apply(lambda x: re.sub(r'[^\d.]', '', x) if isinstance(x, str) else x)

    # Convertir las columnas de precios a números
    df['discount_price'] = pd.to_numeric(df['discount_price'], errors='coerce')
    df['actual_price'] = pd.to_numeric(df['actual_price'], errors='coerce')

    # Guardar el DataFrame corregido en un nuevo archivo CSV
    corrected_file_path = r'C:\Users\johan\Downloads\Prueba_Coyo\Prueba_Tecnica_Becario_Espot\Backend\Data\Master_corrected.csv'
    df.to_csv(corrected_file_path, index=False, encoding='utf-8')

    print(f"Archivo corregido y guardado en '{corrected_file_path}'")
else:
    print(f"El archivo no se encuentra en la ruta especificada: {file_path}")
