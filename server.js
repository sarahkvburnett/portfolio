const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

mongoose.connect()

app.use(express.static(__dirname + "/views"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname + "/views"));

app.get("/", (req, res) => {
    
    res.render("index", projects)
})


const PORT = 3000; //add env
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
