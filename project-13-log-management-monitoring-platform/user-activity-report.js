use enterprise_monitoring_db;

db.audit_logs.aggregate([
{
    $group: {
        _id: "$username",
        totalActivities: {
            $sum: 1
        }
    }
},
{
    $sort: {
        totalActivities: -1
    }
}
]);
