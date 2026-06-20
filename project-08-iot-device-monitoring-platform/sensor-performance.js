use enterprise_iot_db;

db.telemetry.aggregate([
{
    $group: {
        _id: "$deviceId",
        totalReadings: {
            $sum: 1
        }
    }
},
{
    $sort: {
        totalReadings: -1
    }
}
]);
