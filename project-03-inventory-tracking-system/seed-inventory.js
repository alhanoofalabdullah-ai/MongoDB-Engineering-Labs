use enterprise_inventory_db;

db.warehouses.insertMany([
  {
    warehouseId: "WH-RUH-01",
    warehouseName: "Riyadh Main Warehouse",
    city: "Riyadh",
    capacity: 50000
  },
  {
    warehouseId: "WH-JED-01",
    warehouseName: "Jeddah Distribution Center",
    city: "Jeddah",
    capacity: 40000
  }
]);

db.inventory.insertMany([
  {
    productId: 3001,
    productName: "Laptop Pro 15",
    warehouseId: "WH-RUH-01",
    quantity: 45,
    reorderLevel: 10,
    status: "Available"
  },
  {
    productId: 3002,
    productName: "Wireless Mouse",
    warehouseId: "WH-JED-01",
    quantity: 8,
    reorderLevel: 20,
    status: "Low Stock"
  },
  {
    productId: 3003,
    productName: "Office Desk",
    warehouseId: "WH-RUH-01",
    quantity: 0,
    reorderLevel: 5,
    status: "Out of Stock"
  }
]);

db.stock_movements.insertMany([
  {
    movementId: 1,
    productId: 3001,
    warehouseId: "WH-RUH-01",
    movementType: "IN",
    quantity: 30,
    movementDate: new Date()
  },
  {
    movementId: 2,
    productId: 3002,
    warehouseId: "WH-JED-01",
    movementType: "OUT",
    quantity: 12,
    movementDate: new Date()
  }
]);
