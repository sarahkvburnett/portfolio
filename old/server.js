const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const Project = require("./models/Project");
require("dotenv").config();
require("mongoose");

mongoose
	.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log(err));

app.use(express.static(__dirname + "/views"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname + "/views"));

const tools = {
	Node: "#5C8658",
	Mongo: "#13AA52",
	Mongoose: "#880000",
	Express: "#53B1FE",
	JavaScript: "#F7DF1E",
	React: "#61DAFB",
	CSS: "#214CE5",
	SASS: "#CF649A",
	Stylus: "#FF6347",
};


app.get("/", async (req, res) => {
	const projects = await Project.find();
	return res.render("index", { projects, tools });
});

// app.get("/project", () => {
// 	const project = new Project({
// 		title: "Testing",
// 		image: "/imgs/avatar.png",
// 		tools: ["JavaScript", "CSS", "HTML"],
// 		source: "https://github.com/sarah-burnett/testing",
// 		live: "https://google.com",
// 		intro:
// 			"dfjaklsdfj dfjalsdfjiwej 34i4j20 dkfaj239 djf2l4j 23j423l4 dafjalsdfj",
// 	});
// 	project
// 		.save()
// 		.then((doc) => console.log(doc))
// 		.catch((err) => console.log(err));
// });

const PORT = 3000; //add env
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
