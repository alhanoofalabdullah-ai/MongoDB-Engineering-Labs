use enterprise_document_db;

db.documents.find();

db.documents.find({
    status: "Approved"
});

db.documents.find({
    revision: "B"
});

db.documents.find({
    discipline: "Engineering"
});

db.documents.find({
    $text: {
        $search: "Design"
    }
});
