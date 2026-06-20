use enterprise_monitoring_db;

db.application_logs.insertMany([
{
    logId: "LOG-10001",
    serverName: "APP-SERVER-01",
    logLevel: "ERROR",
    application: "Customer Portal",
    message: "Database connection timeout",
    timestamp: new Date()
},
{
    logId: "LOG-10002",
    serverName: "APP-SERVER-02",
    logLevel: "INFO",
    application: "HR System",
    message: "User login successful",
    timestamp: new Date()
}
]);

db.security_logs.insertMany([
{
    securityEventId: "SEC-20001",
    username: "admin",
    eventType: "Failed Login",
    sourceIp: "192.168.1.10",
    severity: "High",
    timestamp: new Date()
}
]);
