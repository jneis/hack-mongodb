var output = require('./cursor.output');

var findAll = function(db, callback) {
    var cursor = db.collection('restaurants').find();

    output(cursor, callback);
};

module.exports = function(client, url) {
    client.connect(url, function(err, db) {
        findAll(db, function() {
            db.close();
        });
    });
};