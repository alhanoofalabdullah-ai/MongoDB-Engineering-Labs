use enterprise_crud_lab;

db.customers.find();

db.customers.find({ status: "Active" });

db.customers.find({ city: "Riyadh" });
