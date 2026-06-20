use enterprise_ecommerce_db;

db.products.find();

db.orders.find({
    status: "Completed"
});

db.products.find({
    category: "Electronics"
});

db.customers.find({
    city: "Riyadh"
});

db.orders.find().sort({
    orderDate: -1
});
