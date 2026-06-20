use enterprise_data_warehouse_db;

db.fact_sales.aggregate([
{
    $group: {
        _id: null,
        totalRevenue: {
            $sum: "$revenue"
        },
        averageRevenue: {
            $avg: "$revenue"
        },
        totalTransactions: {
            $sum: 1
        }
    }
}
]);
