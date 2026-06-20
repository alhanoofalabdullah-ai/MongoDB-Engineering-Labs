use enterprise_product_catalog_db;

db.inventory.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "productId",
      foreignField: "productId",
      as: "productDetails"
    }
  },
  {
    $unwind: "$productDetails"
  },
  {
    $project: {
      productId: 1,
      warehouse: 1,
      quantity: 1,
      price: "$productDetails.price",
      inventoryValue: {
        $multiply: ["$quantity", "$productDetails.price"]
      }
    }
  }
]);
