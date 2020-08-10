var express =require('express')
var app=express();
var myrouter =express.Router();
myrouter.use(express.json())

myrouter.post("/",(req,res)=>
{
   
var i_data=(req.body);

var original_output=JSON.stringify(i_data.payload);

Object.keys(i_data.referenceData).
forEach(key =>
{
   var change =`{${key}}`;

   var output = new RegExp(change,"g");

   original_output = original_output.replace(output,i_data.referenceData[key])
})

var result= JSON.parse(original_output);
res.send(result);
})

module.exports=myrouter;