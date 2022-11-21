//AIM: Build a server with expressjs
const express = require('express') //this is the method
const ejs =  require('ejs')

const app = express() //this is the function
app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'))

app.listen(3000,()=>{
    console.log('App is listening on port 3000')
})

app.get('/',(req,res)=>{
    res.render('index',{list:['bright', 'ben', 'jonathan', 'daniel']})
})

//inside your teminal: type node app.js
//Note: Once you have the app listening, you go to your browser and type: localhost:3000/