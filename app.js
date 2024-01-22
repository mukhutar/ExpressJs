const express = require('express');
const app = express();

const people = require("./route/people")
const router = require("./route/auth")

// static assets

app.use(express.static('./method-public'))

// PARSE FORM DATA

app.use(express.urlencoded({ extended:false}));

app.use(express.json())
app.use('/api/people', people)
app.use('/login', router)



app.listen(5000 , ()=>{
    console.log("listerning to port 5000...");
})