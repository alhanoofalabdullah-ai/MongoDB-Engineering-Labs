use enterprise_reporting_db;

db.kpis.find();

db.kpis.find({
    status: "Achieved"
});

db.business_metrics.find({
    department: "Operations"
});

db.kpis.find({
    currentValue: {
        $gte: 90
    }
});

db.business_metrics.find().sort({
    recordDate: -1
});
