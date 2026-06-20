use enterprise_data_warehouse_db;

db.fact_sales.aggregate([
{
    $group: {
        _id: "$regionId",
        totalRevenue: {
            $sum: "$revenue"
        }
    }
}
]);
