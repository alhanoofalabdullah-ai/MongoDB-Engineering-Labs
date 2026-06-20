sh.enableSharding(
  "enterprise_db"
);

sh.shardCollection(
  "enterprise_db.transactions",
  {
    transactionId: "hashed"
  }
);
