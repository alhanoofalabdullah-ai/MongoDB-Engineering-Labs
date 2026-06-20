use enterprise_monitoring_db;

db.createCollection("application_logs");

db.createCollection("system_logs");

db.createCollection("security_logs");

db.createCollection("audit_logs");

db.createCollection("alerts");

db.createCollection("monitored_servers");
