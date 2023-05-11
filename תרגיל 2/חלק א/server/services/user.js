const express = require('express');
const router = express.Router();
const user = require('../dbFunctions/user');
const exeptions = require('./exeptions');

//get user details
router.post('/userDetails', (req, res) => {
    const userID = req.body.PersonID;
    if (!userID)
        res.status(400).send("enter all details");
    else {
        user.getUser(userID, uderDetails => {
            if (uderDetails[0] == "err") {
                res.status(500).send(exeptions.exeption(uderDetails[1]));
            }
            else if (Object.keys(uderDetails).length === 0)
                res.status(404).send('user not found');
            else
                res.status(201).send(uderDetails)
        })
    }
})

//add user
router.post('/addUser', (req, res) => {
    let currentUser = req.body;
    if (!currentUser.PersonID || !currentUser.FirstName || !currentUser.LastName || !currentUser.Address
        || !currentUser.BirthDate || !currentUser.Phone || !currentUser.cellPhone)
        res.status(400).send("enter all details");
    else {
        user.addUser(currentUser, ans => {
            if (ans[0] == "err") {
                res.status(500).send(exeptions.exeption(ans[1]));
            }
            else
                res.status(204);
        })
    }
});


//get all vaccinations for user
router.post('/vaccinations', (req, res) => {
    const userID = req.body.PersonID;
    if (!userID)
        res.status(400).send("enter all details");
    else {
        user.getUser(userID, uderDetails => {
            if (uderDetails[0] == "err") {
                res.status(500).send(exeptions.exeption(uderDetails[1]));
            }
            else if (Object.keys(uderDetails).length === 0) {
                res.status(404).send('user not found');
            } else {
                user.getVaccinations(userID, vaccinations => {
                    if (Object.keys(vaccinations).length === 0) {
                        res.status(404).send('no vaccinations for this user');
                    } else
                        res.status(201).send(vaccinations)
                })
            }
        })
    }
})

//get user sick date
router.post('/sickDate', (req, res) => {
    const userID = req.body.PersonID;
    if (!userID)
        res.status(400).send("enter all details");
    else {
        user.getSickDate(userID, sickDate => {
            if (sickDate[0] == "err") {
                res.status(500).send(exeptions.exeption(sickDate[1]));
            }
            else if (Object.keys(sickDate).length === 0)
                res.status(404).send(`You haven't gotten sick with Corona yet`);
            else
                res.status(201).send(sickDate);
        })
    }
})


module.exports = router;
