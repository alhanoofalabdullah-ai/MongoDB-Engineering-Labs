use enterprise_mdm_db;

db.customer_master.aggregate([
{
    $group: {
        _id: "$email",
        count: {
            $sum: 1
        }
    }
},
{
    $match: {
        count: {
            $gt: 1
        }
    }
}
]);
