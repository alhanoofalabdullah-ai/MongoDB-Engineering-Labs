db.data_quality_scores.aggregate([
{
    $group: {
        _id: "$status",
        averageScore: {
            $avg: "$score"
        }
    }
}
]);
