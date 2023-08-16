
# Django Project  

# DRF Assessment Project  
This project is built using Django Rest Framework (DRF) and is divided into three distinct apps: Warehouse, Sales, and Accounting. Each app represents a different aspect of the business process.

# Features

Warehouse Management:  
Allows the creation and retrieval of items with their names and quantities.  
Provides an endpoint to check stock levels in real time.  

Sales and Orders:  
Allows authenticated users to place orders by specifying the item and quantity.  
Enforces stock availability during order placement.  

Accounting:  
Calculates total revenue based on orders and item quantities.  

# Installation  

cd backend  
venv/scripts/activate  
pip install -r requirements.txt  
python manage.py migrate  
py manage.py runserver  


# Endpoints  

GET /warehouse/items/: Retrieve a list of available items and their quantities.  
POST /warehouse/items/create/: Create items.  
GET /warehouse/stocks/: Retrieve a list of available items and their quantities in stock.  

POST /sales/orders/: Users can view their order or place an order by specifying the item and quantity.  
GET /sales/orders/all/: Retrieve a list of orders.  

GET /accounting/finances/: Retrieve all orders and total revenue per order.  