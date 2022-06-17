const express = require("express");
const bodyParser= require("body-parser");

const app=express();
var item =[];



 app.set("view engine","ejs");
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(express.static("public"));

app.get("/",function(req,res){
    var today=new Date();
    var option ={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day=today.toLocaleDateString("en-US",option);

    
    
    res.render("list",{kindOfDay: day, newItems: item});
    
}); 
app.post("/",function(req,res){
    var items= req.body.newitems;
    item.push(items);

    res.redirect("/");
});
app.listen(3000,function(){
    console.log("started");
});