use enterprise_smartcity_db;

db.sensors.insertMany([
{
    sensorId: "SNS-001",
    sensorType: "Traffic",
    location: "King Fahd Road",
    status: "Active"
},
{
    sensorId: "SNS-002",
    sensorType: "Air Quality",
    location: "Olaya District",
    status: "Active"
}
]);

db.traffic_data.insertMany([
{
    trafficId: "TRF-10001",
    location: "King Fahd Road",
    vehicleCount: 1250,
    averageSpeed: 65,
    congestionLevel: "Medium",
    timestamp: new Date()
}
]);

db.environmental_data.insertMany([
{
    recordId: "ENV-001",
    location: "Olaya District",
    airQualityIndex: 78,
    temperature: 34,
    humidity: 45,
    timestamp: new Date()
}
]);
