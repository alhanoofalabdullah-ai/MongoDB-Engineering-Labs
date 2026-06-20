use enterprise_healthcare_db;

db.patients.find();

db.doctors.find({
    specialty: "Cardiology"
});

db.appointments.find({
    status: "Scheduled"
});

db.patients.find({
    bloodType: "O+"
});

db.appointments.find().sort({
    appointmentDate: -1
});
