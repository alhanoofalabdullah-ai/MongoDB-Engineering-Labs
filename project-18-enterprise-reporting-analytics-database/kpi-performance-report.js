use enterprise_reporting_db;

db.kpis.aggregate([
{
    $project: {
        kpiName: 1,
        achievementPercentage: {
            $multiply: [
                {
                    $divide: [
                        "$currentValue",
                        "$targetValue"
                    ]
                },
                100
            ]
        }
    }
}
]);
