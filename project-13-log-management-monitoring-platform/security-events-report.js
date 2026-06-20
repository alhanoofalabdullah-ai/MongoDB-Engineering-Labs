use enterprise_monitoring_db;

db.security_logs.aggregate([
{
    $group: {
        _id: "$eventType",
        totalEvents: {
            $sum: 1
        }
    }
}
]);
