var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Rahul Jaiswal",
    score: 3,
  },

  {
    name: "Anil",
    score: 2,
  },
]

var questions = [{
  question: "Where do I live? ",
  answer: "Lucknow"
}, {
  question: "My favorite sports is? ",
  answer: "Cricket"
},
{
  question: "Where do I play? ",
  answer: "lucknow stadium"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to Do You Know rahul?");
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("Wow! You SCORED: ", score);

  console.log("What is the high scores, if you are  there tell me and I'll enter it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
