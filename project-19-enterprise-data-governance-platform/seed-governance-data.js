use enterprise_governance_db;

db.metadata_repository.insertMany([
{
    assetId: "ASSET-1001",
    assetName: "Customer Master",
    owner: "Data Governance Team",
    classification: "Confidential",
    sourceSystem: "CRM",
    status: "Active"
},
{
    assetId: "ASSET-1002",
    assetName: "Employee Master",
    owner: "HR Department",
    classification: "Internal",
    sourceSystem: "HRMS",
    status: "Active"
}
]);

db.data_quality_rules.insertMany([
{
    ruleId: "DQ-001",
    ruleName: "Email Validation",
    targetField: "email",
    status: "Active"
},
{
    ruleId: "DQ-002",
    ruleName: "Duplicate Customer Check",
    targetField: "customerId",
    status: "Active"
}
]);
