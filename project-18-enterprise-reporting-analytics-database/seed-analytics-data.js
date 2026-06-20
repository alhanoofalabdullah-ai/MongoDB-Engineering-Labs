use enterprise_reporting_db;

db.kpis.insertMany([
{
    kpiId: "KPI-1001",
    kpiName: "Project Completion Rate",
    currentValue: 88,
    targetValue: 95,
    status: "Warning",
    lastUpdated: new Date()
},
{
    kpiId: "KPI-1002",
    kpiName: "Customer Satisfaction",
    currentValue: 92,
    targetValue: 90,
    status: "Achieved",
    lastUpdated: new Date()
}
]);

db.business_metrics.insertMany([
{
    metricId: "MET-1001",
    department: "Operations",
    metricName: "Process Efficiency",
    metricValue: 89,
    recordDate: new Date()
}
]);
