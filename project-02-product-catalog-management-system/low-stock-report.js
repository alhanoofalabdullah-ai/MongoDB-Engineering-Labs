use enterprise_product_catalog_db;

db.inventory.aggregate([
  {
    $match: {
      $expr: {
        $lte: ["$quantity", "$reorderLevel"]
      }
    }
  }
]);
