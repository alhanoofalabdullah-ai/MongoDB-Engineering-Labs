use enterprise_governance_db;

db.metadata_repository.find();

db.metadata_repository.find({
    classification: "Confidential"
});

db.data_quality_rules.find({
    status: "Active"
});

db.metadata_repository.find({
    sourceSystem: "CRM"
});

db.compliance_records.find();
