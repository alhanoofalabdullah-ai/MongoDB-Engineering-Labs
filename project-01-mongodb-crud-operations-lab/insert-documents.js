use enterprise_crud_lab;

db.customers.insertMany([
  {
    customerId: 1,
    fullName: "Ahmed Ali",
    email: "ahmed@example.com",
    city: "Riyadh",
    status: "Active"
  },
  {
    customerId: 2,
    fullName: "Sara Mohammed",
    email: "sara@example.com",
    city: "Jeddah",
    status: "Active"
  },
  {
    customerId: 3,
    fullName: "Noura Khalid",
    email: "noura@example.com",
    city: "Dammam",
    status: "Inactive"
  }
]);
