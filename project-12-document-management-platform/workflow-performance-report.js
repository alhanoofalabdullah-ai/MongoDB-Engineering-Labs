use enterprise_document_db;

db.workflows.aggregate([
{
    $group: {
        _id: "$status",
        totalWorkflows: {
            $sum: 1
        }
    }
}
]);
