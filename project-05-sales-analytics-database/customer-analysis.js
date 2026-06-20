use enterprise_sales_analytics_db;

db.sales.aggregate([
{
    $group: {
        _id: "$customerId",
        totalPurchases: {
            $sum: "$totalAmount"
        },
        transactionCount: {
            $sum: 1
        }
    }
},
{
    $sort: {
        totalPurchases: -1
    }
}
]);
