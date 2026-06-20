use enterprise_financial_db;

db.transactions.aggregate([
{
    $match: {
        amount: {
            $gte: 10000
        }
    }
},
{
    $project: {
        transactionId: 1,
        accountNumber: 1,
        amount: 1,
        transactionDate: 1
    }
}
]);
