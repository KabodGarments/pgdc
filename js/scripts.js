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
