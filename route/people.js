const express = require('express')  
const router = express.Router()
let {people} = require('../data');


router.get('/', (req, res) =>{
    res.status(200).json({status:"success" , data:people});

})


router.get('/:id', (req, res) =>{
    const {id} = req.params
    const SinglePerson = people.find((preson) => preson.id === Number(id))
   
    if(!SinglePerson){
      return res.status(404).json({status:"not found" , message:`not person with id ${id} found`})
    }
    res.status(200).json({status:"success" , data:SinglePerson});

})



router.post('/', (req, res) =>{
    const {name} = req.body
    if(!name){
       return  res.status(400)
       .json({success: false , msg:"please enter a name"})
    }
    res.status(201).send({status:"success" , person: name})
})

router.post("/", (req, res) => {
    const {name ,id} = req.body

    if(!name){
        return  res
        .status(400)
        .json({success: false , msg:"please enter a name"})
     }
     res.status(201).send({status:"success" ,data:[...people , name , id]})

})


router.put('/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    const person = people.find((p) => p.id === Number(id))

    if(!person){
        res.status(404).json({status:"failed" , message:`Couldn't find person with  id ${id}`})
    }
    
    const NewPerson = people.map((person) =>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })

    res.status(200).json({status: 'success', data: NewPerson})

})

router.delete('/:id', (req, res) =>{
    const person = people.find((person) => person.id === Number(req.params.id))

    
    if(!person){
        res.status(404).json({status:"failed" , message:`Couldn't find person with  id ${req.params.id}`})
    }
    const NewPerson = people.filter(person => person.id !== Number(req.params.id))
    return res.status(200).json({status:"success" , data:NewPerson})
    


})

module.exports = router