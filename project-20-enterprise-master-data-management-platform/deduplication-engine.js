use enterprise_mdm_db;

db.customer_master.aggregate([
{
    $group: {
        _id: "$email",
        duplicateCount: {
            $sum: 1
        }
    }
},
{
    $match: {
        duplicateCount: {
            $gt: 1
        }
    }
}
]);
