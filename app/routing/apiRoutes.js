var friends = require("../data/friends.js");

module.exports = {
    getFriends: function (req, res) {
        return res.json(friends);
    },

    postFriend: function (req, res) {
        var results = req.body;

        // Push the survey's results into the array of possible friends.
        friends.push(results);

        var bestMatch = {
            details: {},
            totalDifference: NaN
        }

        // Loop through the array of possible friends.
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;

            // Calculate the total difference in score between the user's results and the results of the possible friend that the first loop is currently on.
            for (var j = 0; j < friends[i].scores.length; j++) {
                totalDifference += Math.abs(results.scores[j] - friends[i].scores[j]);
            };

            /* First, ensure that the user can't be match with themselves. Then, if this is the first possible friend to be compared against, or if the total difference in score is less than that which was previously lowest, record the current possible friend's JSON data and difference in score from the user in the bestMatch object.

            If the difference in score is the same, do nothing. The app only returns one best match, and numerically, both matches are equally good. */
            if ((results !== friends[i]) && (isNaN(bestMatch.totalDifference) || (totalDifference < bestMatch.totalDifference))) {
                bestMatch.details = friends[i];

                bestMatch.totalDifference = totalDifference;
            };
        };

        // If there were no possible matches, return false.
        if (isNaN(bestMatch.totalDifference)) {
            console.log(bestMatch.details);
            res.json(false);
        }

        // Otherwise, respond with the JSON data for the best possible match.
        else {
            console.log(bestMatch.details);
            res.json(bestMatch.details);
        };
    }
};