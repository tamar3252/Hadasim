const db = require('./db')
let sql;


function getPatientChart(currentMonth, callback) {
   let currentYear = new Date().getFullYear();
   sql = `select positiveDate,recoveryDate from patients where 
    (positiveDate like '______${currentMonth}%' and positiveDate like '${currentYear}%')
     or (recoveryDate like '______${currentMonth}%' and recoveryDate like '${currentYear}%')`;
   db.querys(sql, callback);
}

function getNumOfUnvaccinated(callback) {
   sql = `select count(PersonID) from 
    (select PersonID from users LEFT JOIN vaccinations using(PersonID) WHERE vaccinations.PersonID IS NULL) as query`;
   db.querys(sql, callback);
}

module.exports = {
   getPatientChart,
   getNumOfUnvaccinated
}
