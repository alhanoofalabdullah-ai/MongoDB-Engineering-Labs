for(let i = 1; i <= 100000; i++) {

  db.transactions.insertOne({
    transactionId: i,
    amount: Math.random() * 10000
  });

}
