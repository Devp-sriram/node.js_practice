const authorise = (req,res,next)=>{
    const {user} = req.query;
    if(user == 'john'){
        req.user ={name:'john',id:3}
        next() 
    }else{
        res.status(401).send("unauthorised")
    }
    
   
}

module.exports = authorise