use enterprise_iot_db;

db.devices.find();

db.devices.find({
    status: "Online"
});

db.telemetry.find({
    sensorType: "Temperature"
});

db.telemetry.find().sort({
    timestamp: -1
});

db.alerts.find({
    severity: "High"
});
