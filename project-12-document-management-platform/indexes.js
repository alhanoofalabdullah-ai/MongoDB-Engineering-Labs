use enterprise_document_db;

db.documents.createIndex(
{
    documentNumber: 1
},
{
    unique: true
}
);

db.documents.createIndex(
{
    documentTitle: "text"
}
);

db.documents.createIndex(
{
    status: 1
}
);

db.documents.createIndex(
{
    discipline: 1
}
);

db.workflows.createIndex(
{
    documentNumber: 1
}
);
