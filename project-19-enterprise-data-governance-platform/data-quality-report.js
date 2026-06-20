use enterprise_governance_db;

db.data_quality_rules.aggregate([
{
    $group: {
        _id: "$status",
        totalRules: {
            $sum: 1
        }
    }
}
]);
