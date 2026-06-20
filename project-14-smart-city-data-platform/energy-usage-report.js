use enterprise_smartcity_db;

db.energy_consumption.aggregate([
{
    $group: {
        _id: "$district",
        totalConsumption: {
            $sum: "$consumptionKwh"
        }
    }
}
]);
