const express = require("express");
const app= express();
const port =process.env.PORT || 8000;
const hbs=require('hbs');
const path=require('path');

//public static path
//jo top me h pahle wahi run ho rha h
const staticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partials");
//Routing
app.set("view engine","hbs");
app.set("views",templatePath);
app.use(express.static(staticPath));
hbs.registerPartials(partialPath);
app.get("/",(req,res)=>{
    res.render('index')
})

app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("*",(req,res)=>{
    res.render('404err',{
        errmsg:"oop's page not found 😆",
    });
})
app.listen(port,()=>{
    console.log("listening at 8000");
});
