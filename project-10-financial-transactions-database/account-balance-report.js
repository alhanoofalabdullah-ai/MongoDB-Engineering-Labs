use enterprise_financial_db;

db.accounts.aggregate([
{
    $group: {
        _id: "$accountType",
        totalBalance: {
            $sum: "$balance"
        }
    }
}
]);
