const logger = (req,res,next) =>{
    const method = req.method
    const url = req.url
    const date = new Date().getFullYear();
    console.log(method, url, date);
    res.send("Hello ")

}

module.exports = logger