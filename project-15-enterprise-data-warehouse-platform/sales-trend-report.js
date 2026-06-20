use enterprise_data_warehouse_db;

db.fact_sales.aggregate([
{
    $group: {
        _id: "$dateId",
        dailyRevenue: {
            $sum: "$revenue"
        }
    }
},
{
    $sort: {
        _id: 1
    }
}
]);
