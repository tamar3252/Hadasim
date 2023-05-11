const express = require('express');
// const Chart = require('chart.js/auto');
//  const open = import('open');

const user=require('./services/user');
const worker=require('./services/worker');
const homePage=require('./services/homePage');

const app = express();
app.use(express.json());

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user',user);
app.use('/worker',worker);
app.use('/homePage',homePage);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`hi, listeninig to port${port}`))
