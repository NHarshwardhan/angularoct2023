const checkUserip = ()=>{
       return(req,res,next)=>{        
          console.log('Ip Address =',req.ip)
          next()
       }
      
}

const checkJSONContentMiddleware = ()=>{
       return (req,res,next)=>{
            
            if(req.headers['content-type']!== 'application/json'){
                 res.send(401).send({message:'Unauthorize request'})
            }

            next()
           
       }
}


module.exports.checkJSONContentMiddleware = checkJSONContentMiddleware
module.exports.checkUserip = checkUserip