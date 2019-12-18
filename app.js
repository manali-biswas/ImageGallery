var express=require("express");

var app=express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("home");
});

app.get("/about",function(req,res){
	res.render("about");
	
});

app.listen(3000,function(){
	console.log("Server is listening");
});