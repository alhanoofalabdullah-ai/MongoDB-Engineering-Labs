use enterprise_social_db;

db.users.find();

db.posts.find();

db.posts.find({
    likes: {
        $gte: 100
    }
});

db.posts.find().sort({
    createdDate: -1
});

db.users.find({
    followers: {
        $gte: 1000
    }
});
