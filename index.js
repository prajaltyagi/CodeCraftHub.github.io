const express=require('express')
const path=require('path')

const bodyParser=require('body-parser')

const app=express()
app.use(express.static('public'))

app.set("view engine","ejs")

app.use("",require('./routes/routes'))

app.listen(4000,()=>{
    console.log("server started")
})