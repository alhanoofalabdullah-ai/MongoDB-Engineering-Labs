use enterprise_hr_db;

db.employees.find();

db.employees.find({
    status: "Active"
});

db.employees.find({
    department: "Information Technology"
});

db.employees.find({
    salary: {
        $gte: 13000
    }
});

db.employees.updateOne(
{
    employeeId: 4003
},
{
    $set: {
        status: "Active"
    }
}
);

db.employees.deleteOne(
{
    employeeId: 4003
}
);
