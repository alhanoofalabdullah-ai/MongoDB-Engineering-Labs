use enterprise_smartcity_db;

db.traffic_data.find();

db.traffic_data.find({
    congestionLevel: "High"
});

db.environmental_data.find({
    airQualityIndex: {
        $gte: 100
    }
});

db.sensors.find({
    status: "Active"
});

db.traffic_data.find().sort({
    timestamp: -1
});
