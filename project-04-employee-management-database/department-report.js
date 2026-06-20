use enterprise_hr_db;

db.employees.aggregate([
{
    $group: {
        _id: "$department",
        totalEmployees: {
            $sum: 1
        }
    }
}
]);
