use enterprise_data_warehouse_db;

db.fact_sales.find();

db.fact_sales.find({
    revenue: {
        $gte: 1000
    }
});

db.fact_sales.find({
    regionId: 1
});

db.fact_sales.find().sort({
    dateId: -1
});
