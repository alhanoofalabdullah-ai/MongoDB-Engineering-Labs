db.transactions.updateOne(
{
  transactionId: 50000
},
{
  $set: {
    amount: 15000
  }
});
