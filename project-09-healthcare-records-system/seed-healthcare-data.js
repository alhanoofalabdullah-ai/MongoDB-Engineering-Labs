use enterprise_healthcare_db;

db.patients.insertMany([
{
    patientId: 9001,
    fullName: "Ahmed Alharbi",
    dateOfBirth: "1990-04-15",
    gender: "Male",
    bloodType: "O+",
    status: "Active"
},
{
    patientId: 9002,
    fullName: "Sara Mohammed",
    dateOfBirth: "1988-09-21",
    gender: "Female",
    bloodType: "A+",
    status: "Active"
}
]);

db.doctors.insertMany([
{
    doctorId: 5001,
    doctorName: "Dr. Khalid",
    specialty: "Cardiology",
    department: "Heart Center"
},
{
    doctorId: 5002,
    doctorName: "Dr. Noura",
    specialty: "Neurology",
    department: "Neuroscience"
}
]);

db.appointments.insertMany([
{
    appointmentId: 3001,
    patientId: 9001,
    doctorId: 5001,
    appointmentDate: new Date(),
    status: "Scheduled"
},
{
    appointmentId: 3002,
    patientId: 9002,
    doctorId: 5002,
    appointmentDate: new Date(),
    status: "Completed"
}
]);
