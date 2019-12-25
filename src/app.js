const path = require("path");
const express = require("express");
const app = express();

// Routes
app.get("/", (req, res) => {
	res.sendFile("index.html", {
		root: path.join(__dirname, "../public")
	});
});

app.get("/about", (req, res) => {
	res.sendFile("about.html", {
		root: path.join(__dirname, "../public")
	});
});

// Start listening on a PORT
app.listen("3000", () => {
	console.log("Server running on Port 3000");
});
