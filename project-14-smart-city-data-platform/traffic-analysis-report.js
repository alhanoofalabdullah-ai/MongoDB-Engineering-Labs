use enterprise_smartcity_db;

db.traffic_data.aggregate([
{
    $group: {
        _id: "$location",
        averageVehicles: {
            $avg: "$vehicleCount"
        },
        averageSpeed: {
            $avg: "$averageSpeed"
        }
    }
}
]);
