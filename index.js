const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./Routes/api');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Database is connected")).catch(err => console.log(err))

app.use(bodyParser.json());
app.use('/api',routes);
app.use((err,req,res,next) => {
    console.log(err);
    next();
})

app.use((req,res) => {
    res.send('Welcome to express')
});
app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})