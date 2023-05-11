const db = require('./db')
let sql;


function getUser(id, callback) {
    sql = `select * from users where PersonID=${id}`
    db.querys(sql, callback);
}

function addUser(user, callback) {
    sql = `insert into users values('${user.FirstName}','${user.LastName}','${user.PersonID}',
        '${user.Address}','${user.BirthDate}','${user.Phone}','${user.cellPhone}') `;
    db.querys(sql, callback);
}

function getVaccinations(id, callback) {
    sql = `select producer,vaccinationDate from vaccinations where PersonID=${id}`;
    db.querys(sql, callback);
}

function getSickDate(id, callback) {
    sql = `select positiveDate,recoveryDate from patients where PersonID=${id}`
    db.querys(sql, callback);
}


module.exports = {
    getUser,
    getVaccinations,
    addUser,
    getSickDate
}
