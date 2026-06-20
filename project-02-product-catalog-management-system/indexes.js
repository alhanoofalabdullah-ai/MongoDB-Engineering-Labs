use enterprise_product_catalog_db;

db.products.createIndex(
  { productId: 1 },
  { unique: true }
);

db.products.createIndex(
  { productName: "text", category: "text", brand: "text" }
);

db.products.createIndex(
  { category: 1 }
);

db.inventory.createIndex(
  { productId: 1 }
);
