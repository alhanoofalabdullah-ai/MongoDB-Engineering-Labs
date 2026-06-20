use enterprise_chat_db;

db.messages.aggregate([
{
    $group: {
        _id: "$chatRoomId",
        totalMessages: {
            $sum: 1
        }
    }
},
{
    $sort: {
        totalMessages: -1
    }
}
]);
