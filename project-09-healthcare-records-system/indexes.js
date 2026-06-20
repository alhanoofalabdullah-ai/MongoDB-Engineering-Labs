use enterprise_healthcare_db;

db.patients.createIndex(
{
    patientId: 1
},
{
    unique: true
}
);

db.doctors.createIndex(
{
    doctorId: 1
},
{
    unique: true
}
);

db.appointments.createIndex(
{
    patientId: 1
}
);

db.appointments.createIndex(
{
    doctorId: 1
}
);

db.appointments.createIndex(
{
    appointmentDate: -1
}
);
