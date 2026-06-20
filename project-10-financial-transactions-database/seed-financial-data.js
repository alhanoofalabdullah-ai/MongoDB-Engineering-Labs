use enterprise_financial_db;

db.customers.insertMany([
{
    customerId: 1001,
    fullName: "Ahmed Alharbi",
    city: "Riyadh",
    customerType: "Retail"
},
{
    customerId: 1002,
    fullName: "Sara Mohammed",
    city: "Jeddah",
    customerType: "Retail"
}
]);

db.accounts.insertMany([
{
    accountNumber: "ACC-50001",
    customerId: 1001,
    accountType: "Savings",
    balance: 45000
},
{
    accountNumber: "ACC-50002",
    customerId: 1002,
    accountType: "Current",
    balance: 18000
}
]);

db.transactions.insertMany([
{
    transactionId: "TXN-10001",
    accountNumber: "ACC-50001",
    transactionType: "Transfer",
    amount: 2500,
    currency: "SAR",
    status: "Completed",
    transactionDate: new Date()
},
{
    transactionId: "TXN-10002",
    accountNumber: "ACC-50002",
    transactionType: "Deposit",
    amount: 5000,
    currency: "SAR",
    status: "Completed",
    transactionDate: new Date()
}
]);
