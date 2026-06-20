use enterprise_healthcare_db;

db.patients.aggregate([
{
    $group: {
        _id: "$gender",
        totalPatients: {
            $sum: 1
        }
    }
}
]);
