use enterprise_iot_db;

db.telemetry.aggregate([
{
    $group: {
        _id: "$sensorType",
        averageReading: {
            $avg: "$value"
        },
        maxReading: {
            $max: "$value"
        },
        minReading: {
            $min: "$value"
        }
    }
}
]);
