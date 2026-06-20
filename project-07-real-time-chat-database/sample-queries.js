use enterprise_chat_db;

db.messages.find();

db.messages.find({
    chatRoomId: 10001
});

db.messages.find({
    senderId: 7001
});

db.users.find({
    status: "Online"
});

db.messages.find().sort({
    sentDate: -1
});
