use enterprise_crud_lab;

db.customers.find().sort({ fullName: 1 });

db.customers.find().limit(2);
