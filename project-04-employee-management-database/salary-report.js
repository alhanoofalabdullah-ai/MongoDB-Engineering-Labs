use enterprise_hr_db;

db.employees.aggregate([
{
    $group: {
        _id: "$department",
        averageSalary: {
            $avg: "$salary"
        },
        highestSalary: {
            $max: "$salary"
        },
        lowestSalary: {
            $min: "$salary"
        }
    }
}
]);
