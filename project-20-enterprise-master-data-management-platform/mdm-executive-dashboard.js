use enterprise_mdm_db;

db.data_quality_scores.aggregate([
{
    $group: {
        _id: null,
        averageQualityScore: {
            $avg: "$score"
        },
        totalAssets: {
            $sum: 1
        }
    }
}
]);
