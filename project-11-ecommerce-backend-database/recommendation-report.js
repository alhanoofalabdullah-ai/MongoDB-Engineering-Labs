use enterprise_ecommerce_db;

db.orders.aggregate([
{
    $group: {
        _id: "$customerId",
        ordersCount: {
            $sum: 1
        }
    }
},
{
    $match: {
        ordersCount: {
            $gte: 5
        }
    }
}
]);
