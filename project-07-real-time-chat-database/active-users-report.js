use enterprise_chat_db;

db.users.aggregate([
{
    $match: {
        status: "Online"
    }
},
{
    $count: "ActiveUsers"
}
]);
