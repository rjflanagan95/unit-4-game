$(document).ready(function() {
    var goalDisplay = $("#goal");
    var winsDisplay = $("#wins");
    var lossesDisplay = $("#losses");
    var scoreDisplay = $("#score");

    var maxScore = 120;
    var minScore = 19;
    var randomGoal;

    // var maxValue = 12;
    // var minValue = 1;
    var score = 0;
    var wins = 0;
    var losses = 0;

    function initializeGame() {
        randomGoal = Math.floor(Math.random()*(maxScore-minScore+1)+minScore);
        goalDisplay.text(randomGoal);
        score = 0;
        scoreDisplay.text(score);

        return score, randomGoal;
    }

    $(".crystal").on("click", function() {
        score += parseInt($(this).attr("value"));
        console.log(score);
        scoreDisplay.text(score);

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