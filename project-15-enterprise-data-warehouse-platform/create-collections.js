use enterprise_data_warehouse_db;

db.createCollection("fact_sales");

db.createCollection("dim_customers");

db.createCollection("dim_products");

db.createCollection("dim_regions");

db.createCollection("dim_time");

db.createCollection("etl_logs");
