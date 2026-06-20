use enterprise_smartcity_db;

db.public_services.aggregate([
{
    $group: {
        _id: "$serviceType",
        totalRequests: {
            $sum: 1
        }
    }
}
]);
