var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send("Hi there");
});
app.get("/bye",function (req,res) {
    res.send("Good Bye!")
});

app.get("/dog",function (req,res) {
    console.log("Dog route is triggered");
    res.send("Meow");
});
app.get("/r/:subredditName",function (req,res) {
    console.log(req.params)
    res.send("Welcome to route params");
})
app.get("/r/:subredditName/comments/:title",function (req,res) {
    console.log(req.params)
    res.send("Welcome to route params with title");
})
app.get("*",function (req,res) {
    res.send("Page Not Found!!");
})
app.listen(3000,function(){
    console.log("Server has started");
});