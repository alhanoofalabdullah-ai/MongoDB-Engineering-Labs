use enterprise_mdm_db;

db.customer_master.insertMany([
{
    customerId: "CUST-1001",
    fullName: "Ahmed Alharbi",
    email: "ahmed@email.com",
    city: "Riyadh",
    sourceSystem: "CRM"
},
{
    customerId: "CUST-1001-ERP",
    fullName: "Ahmed M. Alharbi",
    email: "ahmed@email.com",
    city: "Riyadh",
    sourceSystem: "ERP"
}
]);

db.golden_records.insertMany([
{
    goldenRecordId: "GR-1001",
    customerId: "CUST-1001",
    fullName: "Ahmed Alharbi",
    email: "ahmed@email.com",
    phone: "+966500000000",
    city: "Riyadh",
    sourceSystems: ["CRM", "ERP"],
    qualityScore: 96
}
]);

db.product_master.insertMany([
{
    productId: "PROD-1001",
    productName: "Enterprise Laptop",
    category: "Hardware",
    status: "Active"
}
]);
