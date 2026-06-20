use enterprise_monitoring_db;

db.application_logs.aggregate([
{
    $match: {
        logLevel: "ERROR"
    }
},
{
    $group: {
        _id: "$application",
        totalErrors: {
            $sum: 1
        }
    }
},
{
    $sort: {
        totalErrors: -1
    }
}
]);
