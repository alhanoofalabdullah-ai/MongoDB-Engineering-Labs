use enterprise_ecommerce_db;

db.orders.aggregate([
{
    $group: {
        _id: "$customerId",
        totalSpent: {
            $sum: "$totalAmount"
        }
    }
},
{
    $sort: {
        totalSpent: -1
    }
}
]);
