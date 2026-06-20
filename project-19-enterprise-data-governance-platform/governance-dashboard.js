use enterprise_governance_db;

db.metadata_repository.aggregate([
{
    $group: {
        _id: "$classification",
        totalAssets: {
            $sum: 1
        }
    }
}
]);
