use enterprise_crud_lab;

db.customers.find().pretty();

db.customers.countDocuments();

db.customers.findOne({ customerId: 1 });
