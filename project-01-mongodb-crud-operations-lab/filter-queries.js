use enterprise_crud_lab;

db.customers.find({
  status: "Active"
});

db.customers.find({
  city: { $in: ["Riyadh", "Jeddah"] }
});
