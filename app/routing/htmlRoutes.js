var path = require("path");

module.exports = {
    getHome: function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    },

    getSurvey: function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    }
};