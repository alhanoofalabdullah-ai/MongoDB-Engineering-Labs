use enterprise_ecommerce_db;

db.customers.insertMany([
{
    customerId: 1001,
    fullName: "Ahmed Ali",
    email: "ahmed@example.com",
    city: "Riyadh"
},
{
    customerId: 1002,
    fullName: "Sara Mohammed",
    email: "sara@example.com",
    city: "Jeddah"
}
]);

db.products.insertMany([
{
    productId: 2001,
    productName: "Laptop Pro",
    category: "Electronics",
    price: 5200,
    stock: 50
},
{
    productId: 2002,
    productName: "Wireless Mouse",
    category: "Accessories",
    price: 120,
    stock: 150
}
]);

db.orders.insertMany([
{
    orderId: "ORD-10001",
    customerId: 1001,
    totalAmount: 5200,
    status: "Completed",
    orderDate: new Date()
},
{
    orderId: "ORD-10002",
    customerId: 1002,
    totalAmount: 120,
    status: "Pending",
    orderDate: new Date()
}
]);
