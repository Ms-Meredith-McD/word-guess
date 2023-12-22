//create array of words, randomly selected
//display one word in word box as blanks
//create keydown function, changing letters that match
//create timer (reuse previous examples)
//store wins and losses in local storage
//message for win or loss (textcontent)
//game doesn't start until button is clicked
//reset score button clears local storage

var underscoreContainer = document.querySelector(".word-blanks");

var wordLibrary = [
  "JavaScript",
  "Variable",
  "Function",
  "Array",
  "Christmas",
  "Present",
  "Holiday",
  "Snowman",
  "Rudolph",
];

var word = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
console.log("word: " + word);

var unsolvedWord;

function newWord() {
// Create an array to store the underscores
var underscores = [];

// Generate the underscores based on the length of the hidden word
for (var i = 0; i < word.length; i++) {
  underscores.push("_");
}
console.log("underscores: " + underscores);
// Display the underscores on the screen
underscoreContainer.textContent = underscores.join(" ");
unsolvedWord = underscores.join(" ");
}

newWord();

function keydownAction(event) {
    // document.querySelector(".word-blanks").textContent = event.key;
    var lowerCaseWord = word.toLowerCase();
    //var wordArray;

    for (var i = 0; i < word.length; i++) {
        var index = lowerCaseWord.indexOf(event.key);
        wordArray = unsolvedWord.split("");
        wordArray[index] = event.key;
        var newWord = wordArray.join("");
        console.log(newWord);
    }
}

document.addEventListener("keydown", keydownAction);