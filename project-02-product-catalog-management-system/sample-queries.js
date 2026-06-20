use enterprise_product_catalog_db;

db.products.find();

db.products.find({
  category: "Electronics"
});

db.products.find({
  price: { $lte: 1000 }
});

db.products.find({
  $text: { $search: "Laptop" }
});

db.products.updateOne(
  { productId: 2003 },
  {
    $set: {
      status: "Available",
      price: 799
    }
  }
);

db.products.deleteOne({
  productId: 2002
});
