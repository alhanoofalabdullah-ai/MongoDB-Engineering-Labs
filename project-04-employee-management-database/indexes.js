use enterprise_hr_db;

db.employees.createIndex(
{
    employeeId: 1
},
{
    unique: true
}
);

db.employees.createIndex(
{
    department: 1
}
);

db.employees.createIndex(
{
    position: 1
}
);

db.employees.createIndex(
{
    fullName: "text"
}
);
