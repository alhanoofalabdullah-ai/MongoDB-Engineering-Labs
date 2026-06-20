use enterprise_financial_db;

db.customers.createIndex(
{
    customerId: 1
},
{
    unique: true
}
);

db.accounts.createIndex(
{
    accountNumber: 1
},
{
    unique: true
}
);

db.transactions.createIndex(
{
    transactionId: 1
},
{
    unique: true
}
);

db.transactions.createIndex(
{
    transactionDate: -1
}
);

db.transactions.createIndex(
{
    accountNumber: 1
}
);

db.fraud_alerts.createIndex(
{
    alertLevel: 1
}
);
