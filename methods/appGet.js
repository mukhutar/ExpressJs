const express = require('express');
const app = express();


app.get('/' , (req,res) => {
    res.status(200).send('Welcome')
})


app.all('*', (req, res)=>{
    res.status(404).send('<h1>resources not found</h1>')
})

app.get('/about', (req, res) => {
    res.status(200).send('Welcome to about page')
})
app.listen(5000 , () =>{
    console.log("listening to port 5000");
})

// methods

// app.get
// app.post
// app.put
// app.delete