use enterprise_monitoring_db;

db.application_logs.aggregate([
{
    $group: {
        _id: "$serverName",
        totalEvents: {
            $sum: 1
        }
    }
}
]);
