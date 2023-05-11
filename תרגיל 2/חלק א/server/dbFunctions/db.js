const mysql = require('mysql');

async function querys(sql, callback) {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "a1b2c3d4",
        database: "hmo_db"
    });

    connection.connect((err) => { });
    await connection.query(sql, (err, result) => {
        if (err) {
            result = ['err', err];
        }
        callback(result);
    })
}
module.exports = { querys };