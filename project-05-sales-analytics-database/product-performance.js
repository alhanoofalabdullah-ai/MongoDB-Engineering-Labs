use enterprise_sales_analytics_db;

db.sales.aggregate([
{
    $group: {
        _id: "$productId",
        totalRevenue: {
            $sum: "$totalAmount"
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
