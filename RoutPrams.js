const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.get('/api/products', (req, res) => {

    const NewProduct = products.map((product) =>{
        const{id , name} = product
        return{id, name}
    })
    res.join(NewProduct)
    
})

app.get('/api/products/:productId', (req, res) => {
    const {productId} = req.params
    const SingleProduct = products.find((product) => product.id === Number(productId))

    if(!SingleProduct){
    return     res.status(404).send('Ooops still in development')
    }
  return  res.send(SingleProduct)
})

app.get("/api/v1/query" , (req, res) =>{
    // res.send("hello world")

    const{search , limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if(limit){
        sortedProducts = sortedProducts.slice((0, Number(limit)))
    }

    if(sortedProducts.length < 1){
        // res.status(200).send("the product not in the store")

       return res.status(200).json({status: "success" , data:[]})

    }
    res.status(200).json(sortedProducts)
   
})


app.listen(5500, ()=> {
    console.log('listening on port 5500');
})