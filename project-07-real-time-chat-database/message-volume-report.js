use enterprise_chat_db;

db.messages.aggregate([
{
    $group: {
        _id: {
            year: {
                $year: "$sentDate"
            },
            month: {
                $month: "$sentDate"
            }
        },
        totalMessages: {
            $sum: 1
        }
    }
}
]);
