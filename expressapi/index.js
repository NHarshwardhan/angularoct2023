const express = require('express')
const { checkUserip } = require('./middleware')

const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(express.json())

app.use(checkUserip())


const courseRoutes = require('./router/courses')

app.use('/api',courseRoutes)

app.get('/envinfo',(req,res)=>{
      res.send(process.env.TOKEN_SECRET)
})


app.listen(8000,()=>console.log('Listening on port 8000'))