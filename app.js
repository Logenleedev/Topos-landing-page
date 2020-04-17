var express = require("express");
    path = require("path"),
    app = express(),
    bodyparser = require('body-parser'),
    controls = require('./control/control.js'),
    fs = require('fs');

//Set up the port
let port = process.env.PORT || 3000;

//Host static asset
app.use(express.static('Semantic-UI-CSS-master'));

app.use(express.static(path.join(__dirname,'src')));

app.use(express.static(path.join(__dirname,'Assest')));



// bodyparser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//Set up controller

app.use('/',controls);

//HOME GET
app.get('/',(req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./src/views/main.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
})



app.listen(port, function(){
    console.log('Server Started on Port 3000')
});