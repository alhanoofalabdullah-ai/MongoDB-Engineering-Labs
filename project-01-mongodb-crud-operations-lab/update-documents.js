use enterprise_crud_lab;

db.customers.updateOne(
  { customerId: 3 },
  { $set: { status: "Active" } }
);
