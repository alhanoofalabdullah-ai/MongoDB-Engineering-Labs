use enterprise_document_db;

db.audit_logs.aggregate([
{
    $group: {
        _id: "$userName",
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
