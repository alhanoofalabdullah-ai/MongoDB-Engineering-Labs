use enterprise_governance_db;

db.data_lineage.aggregate([
{
    $group: {
        _id: "$sourceSystem",
        totalFlows: {
            $sum: 1
        }
    }
}
]);
