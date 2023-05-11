const db = require('./db')
let sql;


function getAllUusers(callback) {
    sql = `select * from users left join patients on users.PersonID=patients.PersonID`;
    db.querys(sql, callback);
}

function getAllVaccinations(callback) {
    sql = `select * from vaccinations`
    db.querys(sql, callback);
}
function addVaccination(vaccination, callback) {
    sql = `insert into vaccinations(PersonID,producer,vaccinationDate) values('${vaccination.PersonID}','${vaccination.producer}','${vaccination.vaccinationDate}')`;
    db.querys(sql, callback);
}

function getAllPatients(callback) {
    sql = `select * from patients inner join users on users.PersonID=patients.PersonID`
    db.querys(sql, callback);
}

function addPatient(sickDetails, callback) {
    if (sickDetails.recoveryDate) {
        sql = `insert into patients values('${sickDetails.PersonID}','${sickDetails.positiveDate}','${sickDetails.recoveryDate}')`
    }
    else
        sql = `insert into patients(PersonID,positiveDate) values('${sickDetails.PersonID}','${sickDetails.positiveDate}')`
    db.querys(sql, callback);
}

function getAllCurrentPatients(currentDate, callback) {
    sql = `select * from patients where recoveryDate>'${currentDate}'`
    db.querys(sql, callback);
}

function getAllproducers(callback) {
    sql = `select * from producers`
    db.querys(sql, callback);
}

function addproducers(name, callback) {
    sql = `insert into producers(producerName) values ('${name}')`
    db.querys(sql, callback);
}

module.exports = {
    getAllUusers,
    addVaccination,
    addPatient,
    getAllVaccinations,
    getAllPatients,
    getAllproducers,
    addproducers,
    getAllCurrentPatients
}
