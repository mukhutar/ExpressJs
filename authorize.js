const authorize = (req, res , next) => {

    const {user} = req.query
    if(user === "mk"){
       req.user = {name: "mk", id: 123}
        next()
    }

    else{
        res.status(401).send("unuthorized") 
    }
    // console.log("authorize");
    // next();
}

module.exports= authorize;