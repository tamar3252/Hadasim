const express = require('express');
const router = express.Router();
const exeptions = require('./exeptions')
const worker = require('../dbFunctions/worker');
const user = require('../dbFunctions/user');

//get all users with sick dates
router.get('/allUsers', (req, res) => {
    worker.getAllUusers(users => {
        if (users)
            res.status(201).send(users);
        else
            res.status(404).send('no users');
    })
})

//get all Vaccinations of all users
router.get('/allVaccinations', (req, res) => {
    worker.getAllVaccinations(allVaccinations => {
        if (allVaccinations)
            res.status(201).send(allVaccinations);
        else
            res.status(404).send('no vaccinations');

    })
})

//add vaccination for users
router.post('/addVaccination', (req, res) => {
    const vaccination = req.body;
    if (!vaccination.PersonID || !vaccination.producer || !vaccination.vaccinationDate) {
        res.status(400).send("enter all details");
    }
    else {
        user.getVaccinations(vaccination.PersonID, vaccinations => {
            if (Object.keys(vaccinations).length === 4) {
                res.status(400).send('The client has already been vaccinated 4 times, it is not possible to schedule another vaccination');
            } else {
                worker.addVaccination(vaccination, ans => {
                    if (ans[0] == "err") {
                        res.status(500).send(exeptions.exeption(ans[1]));
                    }
                    else
                        res.status(204);
                })
            }
        })
    }
})

//get All users who have ever gotten sick
router.get('/allpatients', (req, res) => {
    worker.getAllPatients(allpatients => {
        if (allpatients)
            res.status(201).send(allpatients);
        else
            res.status(404).send('no patients');
    })
})

//add sick for user
router.post('/addPatient', (req, res) => {
    const sickDetails = req.body;
    if (!sickDetails.PersonID || !sickDetails.positiveDate){
        res.status(400).send("enter all details");}
    else {
        worker.addPatient(sickDetails, ans => {
            if (ans[0] == "err") {
                res.status(500).send(exeptions.exeption(ans[1]));
            }
            else
                res.status(204);
        })
    }
})

//get All users who sick now
router.get('/allCurrentPatients', (req, res) => {
    const currentDate = new Date(Date.now());
    let date = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
    worker.getAllCurrentPatients(date, allpatients => {
        if (Object.keys(allpatients).length === 0)
            res.status(404).send('No one is sick right now');
        else
            res.status(201).send(allpatients);
    })
})

//get all producers
router.get('/allproducers', (req, res) => {
    worker.getAllproducers(allproducers => {
        if (allproducers)
            res.status(201).send(allproducers);
        else
            res.status(404).send('no producers');

    })
})

//add producer
router.post('/addproducer', (req, res) => {
    let producerName = req.body.producerName;
    if (!producerName)
        res.send("enter all details");
    else {
        worker.addproducers(producerName, ans => {
            if (ans[0] == "err") {
                res.status(500).send(exeptions.exeption(ans[1]));
            }
            else
                res.status(204);
        })
    }
})

module.exports = router;