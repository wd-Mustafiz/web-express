const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 4000;
const staticPath = path.join(__dirname , "../public")
const tamplatePath  = path.join(__dirname , "../tamplates/views")
const partialsPath = path.join(__dirname , "../tamplates/partials")

app.set("view engine" , "hbs");
app.set("views" , tamplatePath)
hbs.registerPartials(partialsPath)
app.use(express.static(staticPath))


app.get("" , (req,res) =>{
    res.render("index")
})


app.get("/about" , (req,res) =>{
    res.render('about')
})


app.get("/weather" , (req,res) =>{
    res.render("weather")
})


app.get("*" , (req , res) => {
    res.render('error', {
        errMsg: "OPPSS.........!! Page Not"
    })
})
app.listen(port)