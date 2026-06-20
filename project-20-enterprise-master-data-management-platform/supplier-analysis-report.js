use enterprise_mdm_db;

db.supplier_master.aggregate([
{
    $group: {
        _id: "$supplierCategory",
        totalSuppliers: {
            $sum: 1
        }
    }
}
]);
