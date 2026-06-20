rs.status().members.forEach(member => {

  print(
    member.name +
    " | State: " +
    member.stateStr
  );

});
