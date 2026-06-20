rs.initiate({
  _id: "shard1Repl",
  members: [
    {
      _id: 0,
      host: "shard1:27017"
    }
  ]
});
