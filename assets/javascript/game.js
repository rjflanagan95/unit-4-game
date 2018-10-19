$(document).ready(function() {
    // assigning text displays to variables
    var goalDisplay = $("#goal");
    var winsDisplay = $("#wins");
    var lossesDisplay = $("#losses");
    var scoreDisplay = $("#score");

    // assigning crystals to variables
    var crystal1 = $("#crystal1");
    var crystal2 = $("#crystal2");
    var crystal3 = $("#crystal3");
    var crystal4 = $("#crystal4");

    // max and min possible goal
    var maxScore = 120;
    var minScore = 19;
    var randomGoal;

    // max and min crystal values
    var maxValue = 12;
    var minValue = 1;

    var score = 0;
    var wins = 0;
    var losses = 0;

    function initializeGame() {
        // reset the random goal and update the text
        randomGoal = Math.floor(Math.random()*(maxScore-minScore+1)+minScore);
        goalDisplay.text(randomGoal);

        // reset the score and update the text
        score = 0;
        scoreDisplay.text(score);
        winsDisplay.text(wins);
        lossesDisplay.text(losses);

        // generate new crystal values and store them in the element's value attribute
        crystal1.attr("value", Math.floor(Math.random()*(maxValue-minValue+1)+minValue));
        console.log("Crystal 1: " + crystal1.attr("value"))
        crystal2.attr("value", Math.floor(Math.random()*(maxValue-minValue+1)+minValue));
        console.log("Crystal 2: " + crystal2.attr("value"))
        crystal3.attr("value", Math.floor(Math.random()*(maxValue-minValue+1)+minValue));
        console.log("Crystal 3: " + crystal3.attr("value"))
        crystal4.attr("value", Math.floor(Math.random()*(maxValue-minValue+1)+minValue));
        console.log("Crystal 4: " + crystal4.attr("value"))
    }

    // when a crystal is clicked, get the value of that crystal from its attribute and add it to the score
    $(".crystal").on("click", function() {
        score += parseInt($(this).attr("value"));
        // update the score display after clicking
        scoreDisplay.text(score);

        // conditions for win or loss, reset the game
        if (score == randomGoal) {
            wins += 1;
            winsDisplay.text(wins);
            initializeGame();
        } else if (score > randomGoal) {
            losses += 1;
            lossesDisplay.text(losses);
            initializeGame();
        }
    });

    initializeGame();

});