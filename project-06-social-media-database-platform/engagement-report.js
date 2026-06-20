use enterprise_social_db;

db.posts.aggregate([
{
    $group: {
        _id: "$userId",
        totalLikes: {
            $sum: "$likes"
        },
        totalComments: {
            $sum: "$comments"
        }
    }
}
]);
