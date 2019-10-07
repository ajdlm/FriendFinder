app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function (req, res) {
    var results = req.body;

    // Push the survey's results into the array of possible friends.

    // CAN THIS BE ACCESSED FROM THIS FILE LIKE THIS? THINK IT THROUGH.
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

        // If this is the first possible friend to be compared against, or if the total difference in score is less than that which was previously lowest, record the current possible friend's JSON data and difference in score from the user in the bestMatch object.
        
        // If the difference in score is the same, do nothing. The app only returns one best match, and numerically, both matches are equally good.
        if (isNaN(bestMatch.totalDifference) || (totalDifference < bestMatch.totalDifference)) {
            bestMatch.details = friends[i];

            bestMatch.totalDifference = totalDifference;
        };
    };

    // Respond with the JSON data for the best possible match.
    res.json(bestMatch.details);
});