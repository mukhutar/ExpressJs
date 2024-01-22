const express = require('express');
const app = express();
const logger = require('./logger');
//  req => middleware => res

app.use(logger)

app.get('/' , (req, res) =>{
    res.send('Home')
})

app.get('/about' , (req, res) =>{
    res.send('about')
})



app.listen(5000 , ()=> {
    console.log(" listening to 5000");
})