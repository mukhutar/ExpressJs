const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');

//  req => middleware => res

app.use([logger , authorize])
app.use(morgan('tiny'))
// app.use(express.static("./public"))

app.get('/' , (req, res) =>{
    res.send('Home')
})

app.get('/about' , (req, res) =>{
    res.send('about')
})

app.get('/api/products' , (req, res) =>{
    console.log(req.user);
    res.send('about')
})

app.listen(5000 , ()=> {
    console.log(" listening to 5000");
})