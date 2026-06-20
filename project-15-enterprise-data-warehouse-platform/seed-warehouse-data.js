use enterprise_data_warehouse_db;

db.dim_customers.insertMany([
{
    customerId: 1001,
    customerName: "Ahmed Ali",
    city: "Riyadh"
},
{
    customerId: 1002,
    customerName: "Sara Mohammed",
    city: "Jeddah"
}
]);

db.dim_products.insertMany([
{
    productId: 2001,
    productName: "Laptop Pro",
    category: "Electronics"
},
{
    productId: 2002,
    productName: "Wireless Mouse",
    category: "Accessories"
}
]);

db.fact_sales.insertMany([
{
    saleId: "SALE-10001",
    customerId: 1001,
    productId: 2001,
    regionId: 1,
    dateId: 20260101,
    revenue: 5200,
    quantity: 2
},
{
    saleId: "SALE-10002",
    customerId: 1002,
    productId: 2002,
    regionId: 2,
    dateId: 20260102,
    revenue: 120,
    quantity: 5
}
]);
