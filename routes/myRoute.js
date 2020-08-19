var express =require('express')    // importing express
var app=express();                 // created object of express
var myrouter =express.Router();
const RegExp=require("xregexp");    // exretnal module  xregexp  to change the values 

myrouter.use(express.json())


myrouter.post("/",(req,res)=>               // router implementation
{
   input=req.body;   // getting the input from postman console
    value_replace(input.payload.value);      // calling method   value_replace
    res.send(input.payload);
})


function value_replace(input_value) {       
      
   for(x in input_value){
     if(input_value[x].valueType=='string')       // if string changing the value with referenced data 
     {
       for(ref in input.referenceData)
         {
         if(input_value[x].value.match(RegExp(`${ref}`)))
               {
                input_value[x].value=input_value[x].value.replace(RegExp(`{${ref}}`),input.referenceData[ref]);
               }
         }
   
    }
   else
   {
        value_replace(input_value[x]["value"]);   // if it is array then changing the referenced data
   }
 }
}



module.exports=myrouter;