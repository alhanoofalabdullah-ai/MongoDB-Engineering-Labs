use enterprise_data_warehouse_db;

db.fact_sales.createIndex(
{
    saleId: 1
},
{
    unique: true
}
);

db.fact_sales.createIndex(
{
    customerId: 1
}
);

db.fact_sales.createIndex(
{
    productId: 1
}
);

db.fact_sales.createIndex(
{
    dateId: 1
}
);

db.fact_sales.createIndex(
{
    regionId: 1
}
);
