use enterprise_social_db;

db.posts.aggregate([
{
    $project: {
        postId: 1,
        content: 1,
        engagementScore: {
            $add: [
                "$likes",
                "$comments"
            ]
        }
    }
},
{
    $sort: {
        engagementScore: -1
    }
},
{
    $limit: 10
}
]);
