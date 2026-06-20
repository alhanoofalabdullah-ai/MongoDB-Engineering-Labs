use enterprise_sales_analytics_db;

db.customers.insertMany([
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

db.products.insertMany([
{
    productId: 2001,
    productName: "Laptop Pro",
    category: "Electronics",
    price: 5200
},
{
    productId: 2002,
    productName: "Wireless Mouse",
    category: "Accessories",
    price: 120
}
]);

db.sales.insertMany([
{
    saleId: 5001,
    customerId: 1001,
    productId: 2001,
    region: "Riyadh",
    quantity: 2,
    unitPrice: 5200,
    totalAmount: 10400,
    saleDate: new Date()
},
{
    saleId: 5002,
    customerId: 1002,
    productId: 2002,
    region: "Jeddah",
    quantity: 5,
    unitPrice: 120,
    totalAmount: 600,
    saleDate: new Date()
}
]);
