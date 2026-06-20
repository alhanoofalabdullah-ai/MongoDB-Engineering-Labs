use enterprise_document_db;

db.documents.insertMany([
{
    documentNumber: "DOC-10001",
    documentTitle: "Project Execution Plan",
    revision: "A",
    status: "Under Review",
    discipline: "Project Management",
    createdDate: new Date()
},
{
    documentNumber: "DOC-10002",
    documentTitle: "Engineering Design Report",
    revision: "B",
    status: "Approved",
    discipline: "Engineering",
    createdDate: new Date()
}
]);

db.workflows.insertMany([
{
    workflowId: 1,
    documentNumber: "DOC-10001",
    currentStep: "Technical Review",
    assignedTo: "Engineering Manager",
    status: "Pending"
},
{
    workflowId: 2,
    documentNumber: "DOC-10002",
    currentStep: "Final Approval",
    assignedTo: "Project Director",
    status: "Completed"
}
]);
