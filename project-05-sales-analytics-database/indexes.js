use enterprise_sales_analytics_db;

db.sales.createIndex(
{
    saleId: 1
},
{
    unique: true
}
);

db.sales.createIndex(
{
    saleDate: -1
}
);

db.sales.createIndex(
{
    region: 1
}
);

db.sales.createIndex(
{
    customerId: 1
}
);

db.sales.createIndex(
{
    productId: 1
}
);
