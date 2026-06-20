use enterprise_hr_db;

db.departments.insertMany([
{
    departmentId: 1,
    departmentName: "Information Technology"
},
{
    departmentId: 2,
    departmentName: "Human Resources"
},
{
    departmentId: 3,
    departmentName: "Finance"
}
]);

db.positions.insertMany([
{
    positionId: 1,
    positionTitle: "System Administrator"
},
{
    positionId: 2,
    positionTitle: "HR Specialist"
},
{
    positionId: 3,
    positionTitle: "Financial Analyst"
}
]);

db.employees.insertMany([
{
    employeeId: 4001,
    fullName: "Ahmed Alharbi",
    department: "Information Technology",
    position: "System Administrator",
    salary: 15000,
    status: "Active"
},
{
    employeeId: 4002,
    fullName: "Sara Alqahtani",
    department: "Human Resources",
    position: "HR Specialist",
    salary: 12000,
    status: "Active"
},
{
    employeeId: 4003,
    fullName: "Mohammed Alotaibi",
    department: "Finance",
    position: "Financial Analyst",
    salary: 14000,
    status: "Inactive"
}
]);
