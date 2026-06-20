use enterprise_document_db;

db.documents.aggregate([
{
    $group: {
        _id: "$revision",
        totalDocuments: {
            $sum: 1
        }
    }
}
]);
