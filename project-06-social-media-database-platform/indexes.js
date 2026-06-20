use enterprise_social_db;

db.users.createIndex(
{
    userId: 1
},
{
    unique: true
}
);

db.users.createIndex(
{
    username: 1
},
{
    unique: true
}
);

db.posts.createIndex(
{
    postId: 1
},
{
    unique: true
}
);

db.posts.createIndex(
{
    userId: 1
}
);

db.posts.createIndex(
{
    createdDate: -1
}
);
