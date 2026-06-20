use enterprise_chat_db;

db.users.createIndex(
{
    userId: 1
},
{
    unique: true
}
);

db.chat_rooms.createIndex(
{
    chatRoomId: 1
},
{
    unique: true
}
);

db.messages.createIndex(
{
    messageId: 1
},
{
    unique: true
}
);

db.messages.createIndex(
{
    chatRoomId: 1
}
);

db.messages.createIndex(
{
    senderId: 1
}
);

db.messages.createIndex(
{
    sentDate: -1
}
);
