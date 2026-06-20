use enterprise_smartcity_db;

db.environmental_data.aggregate([
{
    $group: {
        _id: "$location",
        averageAQI: {
            $avg: "$airQualityIndex"
        }
    }
}
]);
