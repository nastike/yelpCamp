var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
var campgrounds = [
    {name: "Everest Base Camp", image:"https://toib.b-cdn.net/wp-content/uploads/2017/08/chandratal-lake-himachal-pradesh.jpg"},
    {name: "Machapuchre Base Camp", image:"http://im.rediff.com/getahead/2016/may/12camping1.jpg"},
    {name: "Dhaulagiri Base Camp", image:"https://image.shutterstock.com/image-photo/sunbeam-morning-around-camping-site-600w-649280029.jpg"},
    {name: "Annapurna Base Camp", image:"http://evalbit.com/trip/wp-content/uploads/2019/04/camping.jpg"}
    
];

app.get("/", (req, res)=>{
    res.render("landing")
});
app.get("/campgrounds", (req, res)=>{
    res.render("campgrounds", {campgrounds: campgrounds})
});
app.post("/campgrounds", (req, res)=>{
    // res.send("You hit the post route")
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});
app.get("/campgrounds/new", (req,res)=>{
    res.render("new")
})
app.listen(4000, ()=>{
    console.log("The YelpCamp Server is runing")
});