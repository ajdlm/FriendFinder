var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

app.get("/api/friends", apiRoutes.getFriends);
app.post("/api/friends", apiRoutes.postFriend);

app.get("/survey", htmlRoutes.getSurvey);
app.get("*", htmlRoutes.getHome);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("Listening at PORT " + PORT + ".");
});