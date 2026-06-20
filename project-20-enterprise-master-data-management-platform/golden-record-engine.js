use enterprise_mdm_db;

db.customer_master.aggregate([
{
    $group: {
        _id: "$email",
        records: {
            $push: "$$ROOT"
        }
    }
}
]);
