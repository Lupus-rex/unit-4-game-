$(document).ready(function() {
  // declare global variables
  var computerPick = Math.floor(Math.random() * 101) + 19;
  var userNum = 0;
  var gameOver = false;
  var userWins = 0;
  var userLosses = 0;
  var yellowNum = Math.floor(Math.random() * 12) + 1;
  var greenNum = Math.floor(Math.random() * 12) + 1;
  var purpleNum = Math.floor(Math.random() * 12) + 1;
  var blueNum = Math.floor(Math.random() * 12) + 1;
  // make computer number viewable
  $("#random-number").text(computerPick);

  // yellow click function
  $("#yellow-diamond").on("click", function() {
    userNum = yellowNum + userNum;
    checkVal();
    $("#total-score").text(userNum);
  });
  // green click function
  $("#green-diamond").on("click", function() {
    userNum = greenNum + userNum;
    checkVal();
    $("#total-score").text(userNum);
  });
  // purple click function
  $("#purple-diamond").on("click", function() {
    userNum = purpleNum + userNum;
    checkVal();
    $("#total-score").text(userNum);
  });
  // blue click function
  $("#blue-diamond").on("click", function() {
    userNum = blueNum + userNum;
    checkVal();
    $("#total-score").text(userNum);
  });

  // function to check values of user vs computer
  function checkVal() {
    if (userNum < computerPick) {
      // The player wins if their total score matches the random number from the beginning of the game.
    } else if (userNum === computerPick) {
      gameOver = true;
      userWins++;
      $("#wins-text").text("Wins: " + userWins);
      $("#game-result").text("You won!!");
      $("#random-number").text(computerPick);
      reset();

      // The player loses if their score goes above the random number.
    } else if (userNum > computerPick) {
      gameOver = true;
      userLosses++;
      $("#losses-text").text("Losses: " + userLosses);
      $("#game-result").text("You lost!!");
      $("#random-number").text(computerPick);
      reset();
    }
  }

  // The game restarts whenever the player wins or loses.

  function reset() {
    userNum = 0;
    yellowNum = Math.floor(Math.random() * 12) + 1;
    greenNum = Math.floor(Math.random() * 12) + 1;
    purpleNum = Math.floor(Math.random() * 12) + 1;
    blueNum = Math.floor(Math.random() * 12) + 1;
    computerPick = Math.floor(Math.random() * 101) + 19;
    $("#random-number").text(computerPick);
  }
});
