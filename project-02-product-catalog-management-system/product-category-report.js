use enterprise_product_catalog_db;

db.products.aggregate([
  {
    $group: {
      _id: "$category",
      totalProducts: { $sum: 1 },
      averagePrice: { $avg: "$price" }
    }
  },
  {
    $sort: {
      totalProducts: -1
    }
  }
]);
