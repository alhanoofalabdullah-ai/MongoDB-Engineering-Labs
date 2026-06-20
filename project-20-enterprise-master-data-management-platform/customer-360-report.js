use enterprise_mdm_db;

db.golden_records.aggregate([
{
    $project: {
        customerId: 1,
        fullName: 1,
        city: 1,
        qualityScore: 1,
        sourceSystems: 1
    }
}
]);
