use enterprise_document_db;

db.approvals.aggregate([
{
    $group: {
        _id: "$decision",
        totalActions: {
            $sum: 1
        }
    }
}
]);
