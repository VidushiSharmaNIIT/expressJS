const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

const connect=mongoose.connect("mongodb://localhost/userinfo")
const index1=require('./routes/index1')
const index2=require('./routes/index2')
const index3=require('./routes/index3')
const index4=require('./routes/index4')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded(
{
	extended:true
}))
app.use('/',index1)
app.use('/',index2)
app.use('/',index3)
app.use('/',index4)
app.listen(3000,()=>{
  console.log('run on port 3000!')
})
module.exports=app;