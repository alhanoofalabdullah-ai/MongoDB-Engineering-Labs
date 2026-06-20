use enterprise_chat_db;

db.users.insertMany([
{
    userId: 7001,
    username: "ahmed_dev",
    status: "Online"
},
{
    userId: 7002,
    username: "sara_data",
    status: "Online"
}
]);

db.chat_rooms.insertMany([
{
    chatRoomId: 10001,
    roomName: "Development Team",
    roomType: "GROUP"
},
{
    chatRoomId: 10002,
    roomName: "Project Managers",
    roomType: "GROUP"
}
]);

db.messages.insertMany([
{
    messageId: 9001,
    chatRoomId: 10001,
    senderId: 7001,
    messageText: "Welcome Team",
    messageType: "TEXT",
    sentDate: new Date()
},
{
    messageId: 9002,
    chatRoomId: 10001,
    senderId: 7002,
    messageText: "Thank you",
    messageType: "TEXT",
    sentDate: new Date()
}
]);
