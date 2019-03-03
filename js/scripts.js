function Player(name, roll, diceOne, diceTwo) {
  this.playerName = name;
  this.playerTurnScore = 0;
  this.playerOverallScore = 0;
  this.playerRoll = roll
  this.diceOne = diceOne;
  this.diceTwo = diceTwo;
}

Player.prototype.bankScore = function () {
  this.playerOverallScore += this.playerTurnScore;
}

Player.prototype.rollDice = function () {
  this.diceOne = Math.floor((Math.random() * 6) + 1)
  this.diceTwo = Math.floor((Math.random() * 6) + 1)
  console.log(this.diceOne);
  console.log(this.diceTwo);
  this.playerRoll = this.diceOne + this.diceTwo
  if (this.playerRoll == 2) {
    this.playerOverallScore = 0;
    this.playerTurnScore = 0;
    M.toast({html: 'Bad lack friend! Total score back down to 0...'})
  } else if (this.diceOne === 1 || this.diceTwo === 1) {
    this.playerTurnScore = 0;
    M.toast({html: 'You rolled a 1! Turn over friend.'})
  } else if (this.diceOne === this.diceTwo) {
    this.playerTurnScore += (this.playerRoll += this.playerRoll);
    M.toast({html: 'Matching pair! Double points friend!'})
  } else {
    this.playerTurnScore += this.playerRoll;
  }
}

Player.prototype.checkScore = function () {
  if (this.playerOverallScore >= 100)
     M.toast({html: '100 POINTS! WINNER!!'})
}

$(document).ready(function(){
  $('.collapsible').collapsible();
});

$(document).ready(function () {
  var playerOne = new Player(name);
  var playerTwo = new Player(name);

  $("#twoPlayerMode").click(function (event) {
    event.preventDefault();
    $(".rules-container").hide();
    $(".two-player-mode").show();
    $(".one-player-mode").hide();
    $("#rules-button").show();
    $("#returnToHome").show();
    var playerOneName = $("#playerOne").val()
    $("#playerOneName").text(playerOneName);
    var playerTwoName = $("#playerTwo").val()
    $("#playerTwoName").text(playerTwoName);
    $(".mode-choice").hide();
    $(".p1p2names").hide();
  });


    // Player One Roll Button
    $("#playerOneButton").click(function (event) {
      event.preventDefault();
      playerOne.rollDice()
      // var playerOneName = $("#playerOne").val()
      // $("#playerOneName").text(playerOneName);
      $("#playerOneRoll").text("You rolled a " + playerOne.diceOne + " and " + playerOne.diceTwo);
      $("#playerOneTotal").text(playerOne.playerTurnScore);
      $("#playerOneOverallTotal").text(playerOne.playerOverallScore);
    });

    // Player One Hold Button
    $("#playerOneHold").click(function (event) {
      event.preventDefault();
      playerOne.bankScore();
      $("#playerOneOverallTotal").text(playerOne.playerOverallScore);
      playerOne.playerTurnScore = 0;
      $("#playerOneTotal").text("Saved");
      playerOne.checkScore();
    });

    // Player Two Roll Button
    $("#playerTwoButton").click(function (event) {
      event.preventDefault();
      playerTwo.rollDice()
      // var playerTwoName = $("#playerTwo").val()
      // $("#playerTwoName").text(playerTwoName);
      $("#playerTwoRoll").text("You rolled a " + playerTwo.diceOne + " and " + playerTwo.diceTwo)
      $("#playerTwoTotal").text(playerTwo.playerTurnScore);
      $("#playerTwoOverallTotal").text(playerTwo.playerOverallScore);
    });

    // Player Two Hold Button
    $("#playerTwoHold").click(function (event) {
      event.preventDefault();
      playerTwo.bankScore();
      $("#playerTwoOverallTotal").text(playerTwo.playerOverallScore);
      playerTwo.playerTurnScore = 0;
      $("#playerTwoTotal").text("Saved");
      playerTwo.checkScore();
    });
  });
