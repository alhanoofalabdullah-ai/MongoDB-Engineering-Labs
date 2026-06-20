use enterprise_governance_db;

db.metadata_repository.createIndex(
{
    assetId: 1
},
{
    unique: true
}
);

db.metadata_repository.createIndex(
{
    assetName: "text"
}
);

db.metadata_repository.createIndex(
{
    classification: 1
}
);

db.data_quality_rules.createIndex(
{
    ruleId: 1
},
{
    unique: true
}
);

db.compliance_records.createIndex(
{
    complianceType: 1
}
);
