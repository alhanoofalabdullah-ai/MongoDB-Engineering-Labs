use enterprise_hr_db;

db.employees.aggregate([
{
    $group: {
        _id: "$status",
        totalEmployees: {
            $sum: 1
        }
    }
}
]);
