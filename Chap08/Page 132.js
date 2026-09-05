randomWords[Math.floor(Math.random() * randomWords.length)];
var pickRandomWord = function (words) {
 return words[Math.floor(Math.random() * words.length)];
};
var randomWords = ["Planet", "Worm", "Flower", "Computer"];
pickRandomWord(randomWords);

pickRandomWord(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]);

