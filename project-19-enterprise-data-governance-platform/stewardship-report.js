use enterprise_governance_db;

db.data_stewards.aggregate([
{
    $group: {
        _id: "$department",
        totalStewards: {
            $sum: 1
        }
    }
}
]);
