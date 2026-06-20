use enterprise_ecommerce_db;

db.customers.createIndex(
{
    customerId: 1
},
{
    unique: true
}
);

db.products.createIndex(
{
    productId: 1
},
{
    unique: true
}
);

db.orders.createIndex(
{
    orderId: 1
},
{
    unique: true
}
);

db.orders.createIndex(
{
    customerId: 1
}
);

db.orders.createIndex(
{
    orderDate: -1
}
);

db.products.createIndex(
{
    productName: "text",
    category: "text"
}
);
