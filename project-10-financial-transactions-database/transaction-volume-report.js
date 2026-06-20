use enterprise_financial_db;

db.transactions.aggregate([
{
    $group: {
        _id: "$transactionType",
        totalTransactions: {
            $sum: 1
        },
        totalAmount: {
            $sum: "$amount"
        }
    }
}
]);
