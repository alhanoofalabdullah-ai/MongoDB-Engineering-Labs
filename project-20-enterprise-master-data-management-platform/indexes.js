use enterprise_mdm_db;

db.customer_master.createIndex(
{
    customerId: 1
});

db.customer_master.createIndex(
{
    email: 1
});

db.customer_master.createIndex(
{
    fullName: "text"
});

db.golden_records.createIndex(
{
    goldenRecordId: 1
},
{
    unique: true
});

db.product_master.createIndex(
{
    productId: 1
},
{
    unique: true
});
