const express =require("express");
const bodyParser=require("body-parser");


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendfile(__dirname +"/index.html");
});

app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);

    var result= num2/(num1*num1);
    res.send("THe calculate value is :" +result);
});

app.listen(3000,function(){
    console.log("server is started succefully in port 3000");

}  );