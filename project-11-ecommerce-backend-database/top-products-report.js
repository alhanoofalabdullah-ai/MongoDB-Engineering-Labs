use enterprise_ecommerce_db;

db.reviews.aggregate([
{
    $group: {
        _id: "$productId",
        averageRating: {
            $avg: "$rating"
        }
    }
},
{
    $sort: {
        averageRating: -1
    }
}
]);
