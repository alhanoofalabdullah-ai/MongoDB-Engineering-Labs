use enterprise_monitoring_db;

db.application_logs.find();

db.application_logs.find({
    logLevel: "ERROR"
});

db.security_logs.find({
    severity: "High"
});

db.application_logs.find().sort({
    timestamp: -1
});

db.audit_logs.find();
