use enterprise_sales_analytics_db;

db.sales.find();

db.sales.find({
    region: "Riyadh"
});

db.sales.find({
    totalAmount: {
        $gte: 1000
    }
});

db.sales.find().sort({
    saleDate: -1
});

db.sales.countDocuments();
