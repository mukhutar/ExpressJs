const express = require('express');
const app = express();
// const path = require('path');

// setup static and middleware
app.use(express.static('./public'))

// app.get('/data' , (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'index.html'));
//    adding to static assets
//    SSR
// })

app.all('*', (req, res) => {
    res.status(404).send('oops no reources available')
})

app.listen(5000 , ()=> {
    console.log('listening on port 6000');
})