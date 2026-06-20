use enterprise_iot_db;

db.devices.insertMany([
{
    deviceId: "DEV-001",
    deviceName: "Temperature Gateway",
    location: "Riyadh",
    status: "Online"
},
{
    deviceId: "DEV-002",
    deviceName: "Humidity Sensor",
    location: "Jeddah",
    status: "Online"
}
]);

db.sensors.insertMany([
{
    sensorId: "SEN-001",
    deviceId: "DEV-001",
    sensorType: "Temperature"
},
{
    sensorId: "SEN-002",
    deviceId: "DEV-002",
    sensorType: "Humidity"
}
]);

db.telemetry.insertMany([
{
    telemetryId: 10001,
    deviceId: "DEV-001",
    sensorType: "Temperature",
    value: 28.5,
    unit: "Celsius",
    timestamp: new Date()
},
{
    telemetryId: 10002,
    deviceId: "DEV-002",
    sensorType: "Humidity",
    value: 65,
    unit: "%",
    timestamp: new Date()
}
]);
