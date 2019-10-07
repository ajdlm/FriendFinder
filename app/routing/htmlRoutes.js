app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Redirects anything else to the route that displays home.html.
app.get("*",function (req, res) {
    res.redirect("/");
});