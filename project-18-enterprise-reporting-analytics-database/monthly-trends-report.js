use enterprise_reporting_db;

db.analytics_snapshots.aggregate([
{
    $group: {
        _id: {
            year: {
                $year: "$snapshotDate"
            },
            month: {
                $month: "$snapshotDate"
            }
        },
        averageScore: {
            $avg: "$score"
        }
    }
}
]);
