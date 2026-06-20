use enterprise_social_db;

db.users.aggregate([
{
    $sort: {
        followers: -1
    }
},
{
    $limit: 10
}
]);
