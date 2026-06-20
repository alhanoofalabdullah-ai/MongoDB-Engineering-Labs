use enterprise_social_db;

db.posts.aggregate([
{
    $group: {
        _id: null,
        averageLikes: {
            $avg: "$likes"
        },
        averageComments: {
            $avg: "$comments"
        }
    }
}
]);
