var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs")
app.get("/",function (req,res) {
    res.render("home.ejs");
});
app.get("/fellinlovewith/:thing",function (req,res) {
    var thing = req.params.thing;
    res.render("love.ejs",{thingVar: thing});
});

app.get("/posts",function (req,res) {
    var post=[
        {title: "Post 1",author: "S 1"},
        {title: "Post 2",author: "S 2"},
        {title: "Post 3",author: "S 3"}
    ];
    res.render("posts.ejs",{posts: post});
});
app.listen(3000,function () {
    console.log("Server started");
});