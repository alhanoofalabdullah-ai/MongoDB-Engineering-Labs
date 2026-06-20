use enterprise_inventory_db;

db.stock_movements.aggregate([
  {
    $group: {
      _id: {
        productId: "$productId",
        movementType: "$movementType"
      },
      totalQuantity: {
        $sum: "$quantity"
      },
      movementCount: {
        $sum: 1
      }
    }
  }
]);
