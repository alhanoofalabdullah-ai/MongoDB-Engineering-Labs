use enterprise_financial_db;

db.transactions.aggregate([
{
    $group: {
        _id: {
            year: {
                $year: "$transactionDate"
            },
            month: {
                $month: "$transactionDate"
            }
        },
        totalAmount: {
            $sum: "$amount"
        }
    }
}
]);
