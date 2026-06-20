db.adminCommand({
  replSetStepDown: 60,
  force: true
});
