use enterprise_product_catalog_db;

db.products.insertMany([
  {
    productId: 2001,
    productName: "Laptop Pro 15",
    category: "Electronics",
    brand: "TechBrand",
    price: 5200,
    status: "Available"
  },
  {
    productId: 2002,
    productName: "Wireless Mouse",
    category: "Accessories",
    brand: "SmartTech",
    price: 120,
    status: "Available"
  },
  {
    productId: 2003,
    productName: "Office Desk",
    category: "Furniture",
    brand: "OfficePlus",
    price: 850,
    status: "Out of Stock"
  }
]);

db.categories.insertMany([
  {
    categoryId: 1,
    categoryName: "Electronics"
  },
  {
    categoryId: 2,
    categoryName: "Accessories"
  },
  {
    categoryId: 3,
    categoryName: "Furniture"
  }
]);

db.inventory.insertMany([
  {
    productId: 2001,
    warehouse: "Riyadh Warehouse",
    quantity: 35,
    reorderLevel: 10
  },
  {
    productId: 2002,
    warehouse: "Jeddah Warehouse",
    quantity: 120,
    reorderLevel: 30
  },
  {
    productId: 2003,
    warehouse: "Dammam Warehouse",
    quantity: 0,
    reorderLevel: 5
  }
]);
