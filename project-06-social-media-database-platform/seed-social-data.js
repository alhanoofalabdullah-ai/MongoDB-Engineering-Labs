use enterprise_social_db;

db.users.insertMany([
{
    userId: 6001,
    username: "ahmed_tech",
    fullName: "Ahmed Ali",
    country: "Saudi Arabia",
    followers: 2500,
    status: "Active"
},
{
    userId: 6002,
    username: "sara_data",
    fullName: "Sara Mohammed",
    country: "Saudi Arabia",
    followers: 1800,
    status: "Active"
}
]);

db.posts.insertMany([
{
    postId: 7001,
    userId: 6001,
    content: "MongoDB is amazing for scalable applications.",
    likes: 120,
    comments: 25,
    createdDate: new Date()
},
{
    postId: 7002,
    userId: 6002,
    content: "Learning Aggregation Pipelines.",
    likes: 95,
    comments: 18,
    createdDate: new Date()
}
]);

db.comments.insertMany([
{
    commentId: 8001,
    postId: 7001,
    userId: 6002,
    comment: "Great content!",
    createdDate: new Date()
}
]);
