use enterprise_mdm_db;

db.customer_master.find();

db.golden_records.find();

db.customer_master.find({
    city: "Riyadh"
});

db.customer_master.find({
    email: "ahmed@email.com"
});

db.product_master.find({
    status: "Active"
});
