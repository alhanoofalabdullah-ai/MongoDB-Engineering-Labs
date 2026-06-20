use enterprise_sales_analytics_db;

db.sales.aggregate([
{
    $group: {
        _id: null,
        totalRevenue: {
            $sum: "$totalAmount"
        }
    }
}
]);
