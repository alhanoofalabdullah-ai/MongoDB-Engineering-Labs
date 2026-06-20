use enterprise_financial_db;

db.transactions.aggregate([
{
    $group: {
        _id: "$accountNumber",
        transactionCount: {
            $sum: 1
        },
        totalValue: {
            $sum: "$amount"
        }
    }
},
{
    $sort: {
        totalValue: -1
    }
}
]);
