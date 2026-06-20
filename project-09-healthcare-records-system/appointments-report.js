use enterprise_healthcare_db;

db.appointments.aggregate([
{
    $group: {
        _id: "$status",
        totalAppointments: {
            $sum: 1
        }
    }
}
]);
