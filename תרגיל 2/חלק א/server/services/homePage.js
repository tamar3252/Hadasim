const express = require('express');
const router = express.Router();
const homePage = require('../dbFunctions/homePage');

const { createCanvas } = require('canvas');
const fs = require('fs');

//get a graph showing how many patients there were each day in the last month
router.get('/PatientChart', (req, res) => {
    //Everywhere in the array are kept: the day, and how many patients today and that day
    let ChartMonthsArray=[];
    let days;//num of the says in this month
    let dayAndNum;
    let currentMonth = new Date().getMonth() + 1;
    if (currentMonth == 4 || currentMonth == 6 || currentMonth == 9 || currentMonth == 11)
        days = 30;
    else if (currentMonth == 2)
        days = 28;
    else
        days = 31;
    //Initialization of the array-the days, and the num to 0
    for (let i = 0; i <= days; i++) {
        dayAndNum = [i, 0]
        ChartMonthsArray[i] = dayAndNum;
    }
    let myPromise = new Promise(function (myResolve, myReject) {
        homePage.getPatientChart(currentMonth, PatientChart => {
            console.log(PatientChart)
            let startDay;
            let finishDay;
            //Goes through all the days of the month
            for (let i = 0; i < PatientChart.length; i++) {
                //If he also fell ill and recovered in this month, the entire period of his illness was then
                if (PatientChart[i].positiveDate.getMonth() + 1 == currentMonth &&
                    PatientChart[i].recoveryDate.getMonth() + 1 == currentMonth) {
                    startDay = PatientChart[i].positiveDate.getDate();
                    finishDay = PatientChart[i].recoveryDate.getDate();
                }
                else if (PatientChart[i].positiveDate.getMonth() + 1 == currentMonth) {
                    startDay = PatientChart[i].positiveDate.getDate();
                    finishDay = days;
                }
                else {
                    startDay = 0;
                    finishDay = PatientChart[i].recoveryDate.getDate();
                }
                for (let j = startDay; j <= finishDay; j++) {
                    ChartMonthsArray[j][1] = ChartMonthsArray[j][1] + 1;
                }
            }
           // console.log(ChartMonthsArray)
//Entering the information into the graph
            //Changing the array values ​​so that they represent Coordinates in the graph
            for (let i = 0; i <= days; i++) {
                dayAndNum = [(i + 1) * 25, 450 - ChartMonthsArray[i][1] * 10];
                ChartMonthsArray[i] = dayAndNum;
            }

            const canvas = createCanvas(950, 950);
            // two axes of the graph
            const ctx = canvas.getContext('2d');
            //color of background
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, 950, 950);

            // draw the x,y chart
            ctx.strokeStyle = '#000';
            ctx.beginPath();
            ctx.moveTo(25, 450);
            ctx.lineTo(850, 450);
            ctx.moveTo(25, 450);
            ctx.lineTo(25, 10);
            ctx.stroke();
            ctx.fillStyle = 'blue';
            //draw the points
            for (const [x, y] of ChartMonthsArray) {
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, 2 * Math.PI);
                ctx.fill();
            }
            // save the canvas as a PNG file
            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync('chart.png', buffer);
            dirLength = __dirname.length;
            const dir = __dirname.slice(0, dirLength - 9);
            //return the direction of the image
            myResolve(dir + '/chart.png');
        });
    });
    myPromise.then(function (result) {
        res.sendFile(result);
    });
});

//get the number of patients who are not vaccinated at all
router.get('/numOfUnvaccinated', (req, res) => {
    homePage.getNumOfUnvaccinated(num => res.send(num[0]));
});


module.exports = router;