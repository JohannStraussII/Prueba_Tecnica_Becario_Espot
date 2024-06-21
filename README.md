# Amazon Search Dashboard

## Descripción

Esta aplicación web permite a los usuarios visualizar, filtrar y paginar productos de Amazon de manera eficiente. La interfaz es intuitiva y atractiva, facilitando la interacción con un gran inventario de productos.

## Características

- **Visualización de Productos**: Muestra los productos disponibles en el inventario.
- **Filtrado de Productos**: Permite filtrar los productos por categoría y rango de precios.
- **Paginación de Productos**: Divide los productos en páginas para una mejor visualización.
- **Base de Datos Persistente**: Utiliza una base de datos relacional (SQLite) para almacenar y gestionar los productos.

## Tecnologías Utilizadas

- **Frontend**: React
- **Backend**: Quart
- **Base de Datos**: SQLite
- **Otros**: Axios para solicitudes HTTP, Quart-CORS para manejo de CORS

## Requisitos Previos

- Python 3.x
- Node.js y npm

## Instrucciones de Instalación

### Backend

1. Clona el repositorio:
    ``bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_REPOSITORIO>/Backend
    ``

2. Crea y activa un entorno virtual:
    ``bash
    python -m venv venv
    source venv/bin/activate  # En Windows usa `venv\Scripts\activate`
    ``

3. Instala las dependencias:
    ``bash
    pip install -r requirements.txt
    ``

4. Ejecuta el script para cargar los datos en la base de datos:
    ``bash
    python data_loader.py
    ``

5. Inicia el servidor backend:
    ``bash
    python app.py
    ``

### Frontend

1. Navega al directorio `my-app`:
    ``bash
    cd ../my-app
    ``

2. Instala las dependencias:
    ``bash
    npm install
    ``

3. Inicia la aplicación frontend:
    ``
    bash
    npm start
    ``

## Estructura del Proyecto

```plaintext
.
├── Backend
│   ├── Data
│   │   └── Master_corrected.csv
│   ├── Templates
│   │   └── ...
│   ├── amazon_products.db
│   ├── app.py
│   ├── data_loader.py
│   ├── database.py
│   ├── models.py
│   ├── requirements.txt
│   └── routes.py
├── my-app
│   ├── node_modules
│   ├── public
│   │   ├── index.html
│   │   └── ...
│   ├── src
│   │   ├── components
│   │   │   ├── FilterPanel.js
│   │   │   ├── ProductCard.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Navbar.js
│   │   │   ├── Pagination.js
│   │   │   └── ...
│   │   ├── styles
│   │   │   ├── Dashboard.css
│   │   │   ├── Navbar.css
│   │   │   └── ...
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── ...

## Uso

- Abre `http://localhost:3000` en tu navegador para acceder a la interfaz de usuario.
- Utiliza la barra de navegación y los filtros para buscar productos de interés.
- La paginación te permitirá navegar fácilmente a través de los resultados.

## Notas Adicionales

- Asegúrate de que el backend esté corriendo antes de iniciar el frontend para que las solicitudes a la API funcionen correctamente.
- Si tienes problemas con dependencias, intenta correr `npm audit fix` y `pip install --upgrade -r requirements.txt`.
