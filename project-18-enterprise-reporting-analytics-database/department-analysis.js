use enterprise_reporting_db;

db.business_metrics.aggregate([
{
    $group: {
        _id: "$department",
        averageMetric: {
            $avg: "$metricValue"
        }
    }
}
]);
