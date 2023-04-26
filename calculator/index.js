const express = require('express')
const bodyParser = require('body-parser')

app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/',(req,res)=>{
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let sum = num1+num2;
    res.send('The result of the calculation is : '+sum);
})

app.get('/bmicalculator',(req,res)=>{
    res.sendFile(__dirname + '/index2.html')
})

app.post('/bmicalculator',(req,res)=>{
    // console.log(req.body)
    let w = req.body.weight;
    let h = req.body.height;

    bmi = h*h/w;

    res.send(`<h1> The bmi is : ${bmi} </h1>`)
})

app.listen(3000,()=>{
    console.log('Listening to port 3000')
})