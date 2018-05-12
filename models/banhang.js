var db = require('./manageDB');

exports.findAll = function (callback) {
                    db.executeQuery("select * from banhang", function (err, data){
        callback(err, data);
    });
}
exports.create = function(banhang, callback){
    db.executeQuery("INSERT INTO `qldanhsach`.`banhang` SET ?", banhang, callback);
}

exports.delete = function (banhangId, callback) {
    db.executeQuery("DELETE from `qldanhsach`.`banhang` WHERE id = ?",banhangId,callback);
}
exports.update = function (banhang, callback) {
    db.executeQuery("update `qldanhsach`.`banhang` set ? where `id` = ?;",[banhang, banhang.id], callback);
}
exports.findOne = function (banhangId, callback) {
    db.executeQuery("select * from `qldanhsach`.`banhang` where id=?", banhangId, callback);
}