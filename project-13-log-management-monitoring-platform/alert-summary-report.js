use enterprise_monitoring_db;

db.alerts.aggregate([
{
    $group: {
        _id: "$severity",
        totalAlerts: {
            $sum: 1
        }
    }
}
]);
