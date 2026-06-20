use enterprise_iot_db;

db.device_health.aggregate([
{
    $group: {
        _id: "$deviceId",
        averageUptime: {
            $avg: "$uptimePercentage"
        }
    }
}
]);
