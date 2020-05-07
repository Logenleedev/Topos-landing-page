var express = require("express");
    path = require("path"),
    app = express(),
    bodyparser = require('body-parser'),
    fs = require('fs');

    global.__basedir = __dirname;
//Set up the port
const port = process.env.PORT || 8000;

//Host static asset
app.use(express.static(path.join(__dirname,'src')));
app.use(express.static(path.join(__dirname,'public')));



// bodyparser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//HOME GET
app.get('/',(req,res)=>{
    res.sendFile('./src/views/Main.html',  { root: __dirname });
})

//ABOUT GET
app.get('/About',(req,res)=>{
    res.sendFile('./src/views/About.html',  { root: __dirname });
})

//Privacy Policy GET
app.get('/Privacy-policy',(req,res)=>{
    res.sendFile('./src/views/Privacy.html',  { root: __dirname });
})


app.listen(port, function(){
    console.log('Server Started on Port 8000')
});

