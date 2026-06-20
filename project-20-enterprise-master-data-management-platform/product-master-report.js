use enterprise_mdm_db;

db.product_master.aggregate([
{
    $group: {
        _id: "$category",
        totalProducts: {
            $sum: 1
        }
    }
}
]);
