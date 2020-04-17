var express = require("express");
    path = require("path"),
    app = express(),
    bodyparser = require('body-parser'),
    controls = require('./control/control.js'),
    fs = require('fs');

    global.__basedir = __dirname;
//Set up the port
let port = process.env.PORT || 8000;

//Host static asset
app.use(express.static('Semantic-UI-CSS-master'));

app.use(express.static(path.join(__dirname,'src')));

app.use(express.static(path.join(__dirname,'Assest')));


// bodyparser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//HOME GET
app.get('/',(req,res)=>{
    res.sendFile('./src/views/main.html',  { root: __dirname });
})

app.get('/about-us',(req,res)=> {
    res.sendFile('./src/views/Team.html',  { root: __dirname });
})


app.listen(port, function(){
    console.log('Server Started on Port 8000')
});