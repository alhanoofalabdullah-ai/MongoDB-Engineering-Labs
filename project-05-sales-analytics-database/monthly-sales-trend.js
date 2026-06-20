use enterprise_sales_analytics_db;

db.sales.aggregate([
{
    $group: {
        _id: {
            year: {
                $year: "$saleDate"
            },
            month: {
                $month: "$saleDate"
            }
        },
        monthlyRevenue: {
            $sum: "$totalAmount"
        }
    }
},
{
    $sort: {
        "_id.year": 1,
        "_id.month": 1
    }
}
]);
