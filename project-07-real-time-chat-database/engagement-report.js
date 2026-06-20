use enterprise_chat_db;

db.messages.aggregate([
{
    $group: {
        _id: "$senderId",
        totalMessagesSent: {
            $sum: 1
        }
    }
},
{
    $sort: {
        totalMessagesSent: -1
    }
}
]);
