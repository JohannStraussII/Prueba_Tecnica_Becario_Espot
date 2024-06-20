import pandas as pd
import os

# Ruta de la carpeta que contiene los archivos CSV
folder_path = r'C:\Users\johan\Downloads\Prueba_Coyo\Prueba_Tecnica_Becario_Espot\Backend\Data'

# Obtener la lista de archivos en la carpeta
csv_files = [f for f in os.listdir(folder_path) if f.endswith('.csv')]

# Leer y combinar todos los archivos CSV
combined_csv = pd.concat([pd.read_csv(os.path.join(folder_path, file)) for file in csv_files])

# Guardar el DataFrame combinado en un nuevo archivo CSV
combined_csv.to_csv(os.path.join(folder_path, 'Master.csv'), index=False)

print("Archivos CSV combinados y guardados en 'archivo_combined.csv'")
