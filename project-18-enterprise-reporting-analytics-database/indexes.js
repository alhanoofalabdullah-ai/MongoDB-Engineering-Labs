use enterprise_reporting_db;

db.kpis.createIndex(
{
    kpiId: 1
},
{
    unique: true
}
);

db.kpis.createIndex(
{
    status: 1
}
);

db.business_metrics.createIndex(
{
    department: 1
}
);

db.business_metrics.createIndex(
{
    recordDate: -1
}
);

db.reports.createIndex(
{
    reportName: 1
}
);
