use enterprise_inventory_db;

db.inventory.aggregate([
  {
    $lookup: {
      from: "warehouses",
      localField: "warehouseId",
      foreignField: "warehouseId",
      as: "warehouseDetails"
    }
  },
  {
    $unwind: "$warehouseDetails"
  },
  {
    $group: {
      _id: "$warehouseDetails.warehouseName",
      totalStock: { $sum: "$quantity" },
      totalProducts: { $sum: 1 }
    }
  }
]);
