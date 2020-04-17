var express = require("express"),
    path = require('path'),
    bodyparser = require("body-parser");
    

        
var route = express.Router();


//portfolio Page
route.get('/portfolio',(req,res)=> {
    fs.readFile('../src/views/Team.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
})

module.exports = route;