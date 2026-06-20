use enterprise_financial_db;

db.transactions.find();

db.transactions.find({
    amount: {
        $gte: 1000
    }
});

db.accounts.find({
    balance: {
        $gte: 20000
    }
});

db.transactions.find({
    transactionType: "Transfer"
});

db.transactions.find().sort({
    transactionDate: -1
});
