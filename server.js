//This is a test server

const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Hello</h1>')
    console.log(req)
})

app.get('/about',(req,res)=>{
    res.send('This is the about page')
})

app.get('/contact',(req,res)=>{
    res.send('Get in touch with me on Github')
})

app.listen(8000, ()=>{
    console.log('Server started on port 8000')
})