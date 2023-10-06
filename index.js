require("dotenv").config();
const express = require("express");
const app = express()
const port = process.env.PORT || 4001;

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.get("/twitter", (req, res) => {
    res.send("chakravarthidotcom")
});

app.get("/login", (req, res) => {
    res.send('<h1>please login at chai aur code</h1>');
});

app.get("/youtube", (req, res) => {
    res.send("<h2>Chai aur code</h2>")
});

app.get("/register", (req, res) => {
    res.send("<h2>please register at chai aur code</h2>");
});

app.listen(port, () => {
    console.log(`Node Server is Running on port ${port}`);
});
