use enterprise_inventory_db;

db.inventory.createIndex(
  { productId: 1 }
);

db.inventory.createIndex(
  { warehouseId: 1 }
);

db.inventory.createIndex(
  { status: 1 }
);

db.stock_movements.createIndex(
  { productId: 1, movementDate: -1 }
);
