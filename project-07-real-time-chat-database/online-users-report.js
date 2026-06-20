use enterprise_chat_db;

db.user_sessions.aggregate([
{
    $group: {
        _id: "$status",
        totalUsers: {
            $sum: 1
        }
    }
}
]);
