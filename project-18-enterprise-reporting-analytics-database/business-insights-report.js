use enterprise_reporting_db;

db.business_metrics.aggregate([
{
    $sort: {
        metricValue: -1
    }
},
{
    $limit: 10
}
]);
