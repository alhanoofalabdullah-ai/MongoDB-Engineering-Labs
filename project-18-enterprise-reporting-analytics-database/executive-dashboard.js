use enterprise_reporting_db;

db.kpis.aggregate([
{
    $group: {
        _id: "$status",
        totalKPIs: {
            $sum: 1
        }
    }
}
]);
