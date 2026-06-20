use enterprise_inventory_db;

db.inventory.aggregate([
  {
    $match: {
      $expr: {
        $lte: ["$quantity", "$reorderLevel"]
      }
    }
  },
  {
    $project: {
      productId: 1,
      productName: 1,
      warehouseId: 1,
      quantity: 1,
      reorderLevel: 1,
      status: 1
    }
  }
]);
