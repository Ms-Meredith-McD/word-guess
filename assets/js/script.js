var startButton = document.querySelector(".start-button");
var underscoreContainer = document.querySelector(".word-blanks");
var timerTextEl = document.querySelector(".timer-text");
var winEl = document.querySelector(".win");
var loseEl = document.querySelector(".lose");
var resetButton = document.querySelector(".reset-button");

var wordLibrary = [
  "javascript",
  "variable",
  "function",
  "array",
  "christmas",
  "present",
  "holiday",
  "snowman",
  "rudolph",
];

var word;
var unsolvedWord;
var lettersRemaining;
var timeInterval;
var wins = localStorage.getItem("wins");
var losses = localStorage.getItem("losses");

if (!localStorage.getItem("wins")) {
    wins = 0;
}

if (!localStorage.getItem("losses")) {
    losses = 0;
}

winEl.textContent = wins;
loseEl.textContent = losses;

startButton.addEventListener("click", function (event) {
  event.preventDefault();
  newWord();
  clearInterval(timeInterval);
  countdown();
});

function newWord() {
  word = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
  lettersRemaining = word.length;
  console.log("word: " + word);

  // Create an array to store the underscores
  var underscores = [];

  // Generate the underscores based on the length of the hidden word
  for (var i = 0; i < word.length; i++) {
    underscores.push("_");
  }

  // Display the underscores on the screen
  unsolvedWord = underscores.join(" ");
  underscoreContainer.textContent = unsolvedWord;
}

document.addEventListener("keydown", keydownAction);

function keydownAction(event) {
  var indexes = [];

  for (var i = 0; i < word.length; i++) {
    if (word[i] === event.key) {
      indexes.push(i);
    }
  }

  if (indexes.length !== 0 && unsolvedWord.indexOf(event.key) === -1) {
    for (var i = 0; i < indexes.length; i++) {
      wordArray = unsolvedWord.split(" ");
      wordArray[indexes[i]] = event.key;
      unsolvedWord = wordArray.join(" ");
      lettersRemaining--;
    }
  }

  underscoreContainer.textContent = unsolvedWord;

  if (lettersRemaining === 0) {
    clearInterval(timeInterval);
    timerTextEl.children[0].textContent = "You Win!";
    timerTextEl.children[1].textContent = "";
    wins++;
    localStorage.setItem("wins", wins);
    winEl.textContent = wins;
  }
}

function countdown() {
  var timeLeft = 10;

  timeInterval = setInterval(function () {
    timerTextEl.children[0].textContent = timeLeft;
    timerTextEl.children[1].textContent = "seconds remaining";

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timerTextEl.children[0].textContent = "You Lose!";
      timerTextEl.children[1].textContent = "";
      losses++;
      localStorage.setItem("losses", losses);
      loseEl.textContent = losses;
    }

    timeLeft--;
  }, 1000);
}

resetButton.addEventListener("click", function(event) {
    wins = 0;
    localStorage.setItem("wins", wins);
    winEl.textContent = wins;
    losses = 0;
    localStorage.setItem("losses", losses);
    loseEl.textContent = losses;
  });