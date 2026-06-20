use enterprise_monitoring_db;

db.application_logs.createIndex(
{
    logId: 1
},
{
    unique: true
}
);

db.application_logs.createIndex(
{
    logLevel: 1
}
);

db.application_logs.createIndex(
{
    timestamp: -1
}
);

db.security_logs.createIndex(
{
    severity: 1
}
);

db.security_logs.createIndex(
{
    eventType: 1
}
);
