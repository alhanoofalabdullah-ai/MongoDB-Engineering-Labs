use enterprise_smartcity_db;

db.sensors.createIndex(
{
    sensorId: 1
},
{
    unique: true
}
);

db.traffic_data.createIndex(
{
    location: 1
}
);

db.traffic_data.createIndex(
{
    timestamp: -1
}
);

db.environmental_data.createIndex(
{
    location: 1
}
);

db.city_alerts.createIndex(
{
    severity: 1
}
);
