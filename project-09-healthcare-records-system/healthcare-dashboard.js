use enterprise_healthcare_db;

db.appointments.aggregate([
{
    $group: {
        _id: {
            month: {
                $month: "$appointmentDate"
            }
        },
        appointmentsCount: {
            $sum: 1
        }
    }
}
]);
