var crystalBlue = 0;
var crystalRed = 0;
var crystalPurple = 0;
var crystalWhite = 0;
var gamePoints = 0;
var randomTargetNbr = 0;
var gameOver = true;
var nbrWins = 0;
var nbrLosses = 0;


$(document).ready(function() {

    function resetGame() {

        randomTargetNbr = (Math.floor(Math.random() * 1000) % 102) + 19;
        $("#randomNumber").text(String(randomTargetNbr));


        crystalBlue = (Math.floor(Math.random() * 1000) % 12) + 1;
        crystalRed = (Math.floor(Math.random() * 1000) % 12) + 1;
        crystalPurple = (Math.floor(Math.random() * 1000) % 12) + 1;
        crystalWhite = (Math.floor(Math.random() * 1000) % 12) + 1;


        $("#crystalTotal").text(String(0));
        gamePoints = 0;
        gameOver = false;
    };


    function checkScore() {
        if (gamePoints > randomTargetNbr) {
            nbrLosses++;
            $("#gameCounters").html("<p>You lose!</p><p>Wins: " + nbrWins + "</p><p>Losses: " + nbrLosses + "<p>");
            gameOver = true;
            resetGame();
        } else if (gamePoints === randomTargetNbr) {
            nbrWins++;
            $("#gameCounters").html("<p>You win!</p><p>Wins: " + nbrWins + "</p><p>Losses: " + nbrLosses + "<p>");
            gameOver = true;
            resetGame();
        };
    };


    if (gameOver === true) {
        resetGame();
    }


    $("#buttonBlue").click(function() {
        gamePoints = gamePoints + crystalBlue;
        $("#crystalTotal").text(String(gamePoints));
        checkScore();
    });

    $("#buttonRed").click(function() {
        gamePoints = gamePoints + crystalRed;
        $("#crystalTotal").text(String(gamePoints));
        checkScore();
    });

    $("#buttonPurple").click(function() {
        gamePoints = gamePoints + crystalPurple;
        $("#crystalTotal").text(String(gamePoints));
        checkScore();
    });

    $("#buttonWhite").click(function() {
        gamePoints = gamePoints + crystalWhite;
        $("#crystalTotal").text(String(gamePoints));
        checkScore();
    });

});