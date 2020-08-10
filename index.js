const express = require('express');  // imported express
var app = express();   //  created express object 

var myroutes=require('./routes//myRoute.js');   // imported route 
   
     
app.use('/api',myroutes); 

app.listen(3003,()=>{                                // used port 3003

    console.log("listening at port 3003");
})