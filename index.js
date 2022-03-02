const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));



app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname, "/views"));


app.get("/home", (req,res) =>{
    res.render("home");
})


app.get("/contact", (req,res) =>{
    res.render("contact");
})

app.get("/projects", (req,res) =>{
    res.render("projects");
})



app.listen(3000, () => {
    console.log("Server is running")
})