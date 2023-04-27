const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
   
    res.sendFile(__dirname+'/index.html')

})

app.post('/',(req,res)=>{
    
        const query = req.body.cityName;
        const appid = '01462d68a2de62a4551630e9dbda441e'
        const url = 'https://api.openweathermap.org/data/2.5/weather?q='+query+'&appid='+appid+'&units=metric'
        https.get(url,(response)=>{
            // console.log(response.statusCode)
            response.on('data',(data)=>{
                const weatherdata = JSON.parse(data)
                const desc = weatherdata.weather[0].description
                const temp = weatherdata.main.temp
                const icon_number = weatherdata.weather[0].icon
                const icon = 'http://openweathermap.org/img/wn/'+icon_number+'@2x.png'
                // console.log(icon)
                res.write('<h1>The temperature description of '+query+' is : '+desc+'</h1>')
                res.write('<p> The temperature is : '+temp+' K </p>')
                console.log(icon)
                res.write('<img src='+ icon +'>')
                res.send()
            })
        })
})


app.listen(3000,()=>{
    console.log('Server Up on 3000')
})