const path = require("path");
const express = require("express");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "hbs");

// Routes
app.get("/", (req, res) => {
	res.render("index");
});

app.get("/about", (req, res) => {
	res.render("about");
});

// app.get("/", (req, res) => {
// 	res.sendFile("index.html", {
// 		root: path.join(__dirname, "../public")
// 	});
// });

// app.get("/about", (req, res) => {
// 	res.sendFile("about.html", {
// 		root: path.join(__dirname, "../public")
// 	});
// });

// Start listening on a PORT
app.listen("3000", () => {
	console.log("Server running on Port 3000");
});
