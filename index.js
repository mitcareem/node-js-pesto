const express = require("express");
const superheroes = require('superheroes');

var name = superheroes.random();
console.log(name);

const app = express();

app.get("/name", function (req, res) {
    res.send("hello from express");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("server is started");
});
