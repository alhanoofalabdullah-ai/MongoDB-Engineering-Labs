use enterprise_inventory_db;

db.inventory.find();

db.inventory.find({
  status: "Low Stock"
});

db.inventory.find({
  warehouseId: "WH-RUH-01"
});

db.inventory.updateOne(
  { productId: 3002 },
  {
    $inc: {
      quantity: 50
    },
    $set: {
      status: "Available"
    }
  }
);

db.stock_movements.insertOne({
  movementId: 3,
  productId: 3002,
  warehouseId: "WH-JED-01",
  movementType: "IN",
  quantity: 50,
  movementDate: new Date()
});
