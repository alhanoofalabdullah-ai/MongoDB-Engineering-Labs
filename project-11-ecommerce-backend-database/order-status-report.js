use enterprise_ecommerce_db;

db.orders.aggregate([
{
    $group: {
        _id: "$status",
        totalOrders: {
            $sum: 1
        }
    }
}
]);
