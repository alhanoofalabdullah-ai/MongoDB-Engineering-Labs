use enterprise_smartcity_db;

db.city_alerts.aggregate([
{
    $group: {
        _id: "$severity",
        totalAlerts: {
            $sum: 1
        }
    }
}
]);
