use enterprise_data_warehouse_db;

db.fact_sales.aggregate([
{
    $group: {
        _id: "$productId",
        totalRevenue: {
            $sum: "$revenue"
        },
        totalQuantitySold: {
            $sum: "$quantity"
        }
    }
},
{
    $sort: {
        totalRevenue: -1
    }
}
]);
