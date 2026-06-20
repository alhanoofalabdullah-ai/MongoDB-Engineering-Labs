use enterprise_document_db;

db.documents.aggregate([
{
    $group: {
        _id: "$status",
        totalDocuments: {
            $sum: 1
        }
    }
}
]);
