const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let items = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    // res.send('Hey there!')

    let today = new Date();
    // let day = "";

    let options = {
        weekday:'long',
        day:'numeric',
        month:'long'
    };

    let day = today.toLocaleDateString('en-US',options);
    res.render('list',{kindOfDay:day,newItems:items});

})  

app.post('/',(req,res)=>{
    item = req.body.task;
    items.push(item);
    res.redirect('/');  })

app.listen(3000, ()=>{
    console.log('Listening at port 3000');
})