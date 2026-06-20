use enterprise_healthcare_db;

db.prescriptions.aggregate([
{
    $group: {
        _id: "$medicationName",
        totalPrescriptions: {
            $sum: 1
        }
    }
}
]);
