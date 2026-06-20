use enterprise_sales_analytics_db;

db.sales.aggregate([
{
    $group: {
        _id: "$region",
        totalRevenue: {
            $sum: "$totalAmount"
        },
        transactions: {
            $sum: 1
        }
    }
}
]);
