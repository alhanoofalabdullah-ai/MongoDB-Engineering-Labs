use enterprise_iot_db;

db.devices.aggregate([
{
    $group: {
        _id: "$status",
        totalDevices: {
            $sum: 1
        }
    }
}
]);
