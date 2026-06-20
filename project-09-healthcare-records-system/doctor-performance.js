use enterprise_healthcare_db;

db.appointments.aggregate([
{
    $group: {
        _id: "$doctorId",
        totalAppointments: {
            $sum: 1
        }
    }
},
{
    $sort: {
        totalAppointments: -1
    }
}
]);
