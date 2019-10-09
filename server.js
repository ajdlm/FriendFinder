var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/friends", apiRoutes.getFriends);
app.post("/api/friends", apiRoutes.postFriend);

app.get("/", htmlRoutes.getHome);
app.get("/survey", htmlRoutes.getSurvey);
app.get("*", htmlRoutes.getHome);

app.listen(PORT, function () {
    console.log("Listening at PORT " + PORT);
});