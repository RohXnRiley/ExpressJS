const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const https = require('https')

const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.sendFile    (__dirname+'/signup.html')
})

app.post('/',(req,res)=>{
    const firstname = req.body.fname;
    const lastname = req.body.lname;
    const mail = req.body.email;

    const data = {
        members : [
            {
                email_address : mail,
                status : 'subscribed',
                merge_fields : {
                    FNAME : firstname,
                    LNAME : lastname,

                }
            }
        ]
    }



    const jsonData = JSON.stringify(data);


    const url = 'https://us21.api.mailchimp.com/3.0/lists/4c79fa79b1'
    const options = {
        method : 'POST',
        auth : 'simon:fd3ef696f482c618b47138d109bdbb1a-us21'
    }

    const request = https.request(url,options,(response)=>{
        
        if(response.statusCode == 200) {
            res.send('Successfully Subscribed to the NewsLetter');
        }
        else
        {
            res.send('There has been an error man, better luck next time')
        }
        
        response.on('data',(data)=>{
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData);
    request.end()
    
})

app.listen(3000,()=>{
    console.log('Listening to port 3000')
})

// fd3ef696f482c618b47138d109bdbb1a-us21
// 4c79fa79b1