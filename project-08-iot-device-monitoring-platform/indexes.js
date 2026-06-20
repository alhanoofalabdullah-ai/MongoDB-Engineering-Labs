use enterprise_iot_db;

db.devices.createIndex(
{
    deviceId: 1
},
{
    unique: true
}
);

db.sensors.createIndex(
{
    sensorId: 1
},
{
    unique: true
}
);

db.telemetry.createIndex(
{
    deviceId: 1
}
);

db.telemetry.createIndex(
{
    timestamp: -1
}
);

db.alerts.createIndex(
{
    severity: 1
}
);
