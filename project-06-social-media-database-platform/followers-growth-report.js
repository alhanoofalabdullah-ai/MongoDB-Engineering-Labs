use enterprise_social_db;

db.users.aggregate([
{
    $group: {
        _id: "$country",
        totalFollowers: {
            $sum: "$followers"
        }
    }
}
]);
