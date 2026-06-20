use enterprise_governance_db;

db.compliance_records.aggregate([
{
    $group: {
        _id: "$complianceType",
        totalRecords: {
            $sum: 1
        }
    }
}
]);
