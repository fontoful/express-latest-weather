const path = require("path");
const express = require("express");
const app = express();

const router = require("./router");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "hbs");

app.use("/", router);

// Start listening on a PORT
app.listen("3000", () => {
    console.log("Server running on Port 3000");
});
