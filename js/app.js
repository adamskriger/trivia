$( document ).ready(function() {
  console.log("ready!")


//These are hidden divs that appear only when called
  $("#answerContainer").hide();
  $("#winStatePlayer1").hide();
  $("#reset").hide();


var counter = 3;
var player1Score = 0;
var player2Score = 0;

function Question(question, answer, incorrectAnswer1, incorrectAnswer2, difficultyLevel) {

  this.question = question;
  this.answer = answer;
  this.played = false;
  this.incorrectAnswer1 = incorrectAnswer1;
  this.incorrectAnswer2 = incorrectAnswer2;
  this.difficultyLevel = difficultyLevel;


  this.display = function(){
      //when a button is clicked,
      //this.display will change the class of the function
      //to displaying which will cause it to be shown
  };


}


//The shuffle function is based on Fisher-Yates algorithm. Thanks F-Y!

shuffle = function(o){
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

//creates instances of questions

var question1 = new Question('How old was Steve Jobs when he founded Apple?','20 years old', '25 years old', '32 years old', 1);
var question2 = new Question('How long did it take for Facebook to turn a profit?','5 years', '3 years', 'FB is still not profitable', 1);
var question3 = new Question('In what city was General Assembly founded?','New York City', 'San Francisco', 'Chicago', 1);
var question4 = new Question('How many monthly users does Instragram have?','300 million', '150,000', 'Who uses Instagram?', 1);
var question5 = new Question('What does I.P.O. stand for?','Initial Public Offering', 'Internet Pursuing Others', 'Instant Price Offering', 1);


//create constructor function to create player objects

function Person(firstName) {
    this.firstName = firstName;
    this.myTurn = false;
    this.score = 0;

}

//create instances of people who will be playing
var player1 = new Person();
var player2 = new Person();


//Assign player turn
function setPlayerTurn() {
  if (counter % 2 !== 0) {
    player1.myTurn = true;
    player2.myTurn= false;
  } else if (counter % 2 === 0) {
    player2.myTurn = true;
    player1.myTurn = false;
  }

}

setPlayerTurn();


var ArrayOfQuestions = [question1, question2, question3, question4, question5 ];

$( "#askQuestionButton" ).on( "click", function() {
    shuffle(ArrayOfQuestions);
    for (var i=0; i < ArrayOfQuestions.length; i++) {

    $('#questionContainer').html(ArrayOfQuestions[i].question); //this puts the question into the div with id questionContainer

    $("#answerContainer").hide();
    $('#answerContainer').html(ArrayOfQuestions[i].answer);



  //The following function shuffles the answer choices and places them in an array:
  function incorrectAnswersShuffler(question, answer, incorrectAnswer1, incorrectAnswer2) {
    var incorrectAnswersArray = [answer, incorrectAnswer1, incorrectAnswer2];
    shuffle(incorrectAnswersArray);
    //now we have to place the shuffled answers into the divs that contain the mc answer choices:
    $('#choice1').html(incorrectAnswersArray[0]);
    $('#choice2').html(incorrectAnswersArray[1]);
    $('#choice3').html(incorrectAnswersArray[2]);

}

  incorrectAnswersShuffler(ArrayOfQuestions[i].question, ArrayOfQuestions[i].answer, ArrayOfQuestions[i].incorrectAnswer1, ArrayOfQuestions[i].incorrectAnswer2);

}

  $("#multipleChoiceAnswers").show();


//end of event handler / click on ask question button
});

var choice1 = $('#choice1');
var choice2 = $('#choice2');
var choice3 = $('#choice3');



//This function goes within the click event and is the main function of the game
function within(aChoice) {
  if (aChoice.html() === $('#answerContainer').html() && player1.myTurn === true) {
    player1Score++;
    counter++;
    setPlayerTurn();
    $("#answerContainer").show();
  }

  else if (aChoice.html() === $('#answerContainer').html() && player2.myTurn === true) {
    player2Score++;
    counter++;
    setPlayerTurn();
    $("#answerContainer").show();

  }

//this is the code that increments the counter when a wrong answer choice is clicked upon:
  else if (aChoice.html() !== $('#answerContainer').html() && player2.myTurn === true)
  {

    counter++;
    setPlayerTurn();
    $("#answerContainer").show();

  }

  else if (aChoice.html() !== $('#answerContainer').html() && player1.myTurn === true)
  {
    counter++;
    setPlayerTurn();
    $("#answerContainer").show();

  }
  //end of code that increments the counter when a wrong answer choice is clicked upon:

  //The following describes and sets the win states:

  if (player1Score > 0) {
    console.log("Player1 Wins");
    $('#winStatePlayer1').html("Player 1 Wins");
    $('#winStatePlayer1').show();
    hideAll();

  }

  if (player2Score > 0) {
    console.log("Player2 Wins");
    $('#winStatePlayer1').html("Player 2 Wins");
    $('#winStatePlayer1').show();
    hideAll();

  }

  //end win states//
  $("#multipleChoiceAnswers").hide();
  //Display scores:
  $('#player1Score').html("Player 1 Score: " + player1Score);
  $('#player2Score').html("Player 2 Score: " + player2Score);
  displayCurrentPlayer();

}

// clicking on choice 1:
// choice1.on("click", theHandler);
//
// function theHandler(evt) {
//
// within(choice1);
//
// };

$("#choice1").on("click", function() {

  within(choice1);

});


//Clicking on #choice 2:
$("#choice2").on("click", function() {

  within(choice2);

});


//Clicking on #choice 3:
$("#choice3").on("click", function() {

  within(choice3);

});


function displayCurrentPlayer() {

if (player1.myTurn === true) {
  currentPlayer = "Player 1"
}
if (player2.myTurn === true) {
  currentPlayer = "Player 2"

}

console.log(currentPlayer)
$('#currentPlayer').html("Current Player: " + currentPlayer);

}

function hideAll(){
  $("#playerScores").hide();
  $("#questionContainer").hide();
  $("#askQuestionButton").hide();
  $("#talkShowHost").hide();
  $("#answerContainerContainer").hide();
  $("#answerContainer").hide();
  $("#reset").show();

}


function reset() {
  player1Score = 0;
  player2Score = 0;
  counter = 3;
  $('#player1Score').html("Player 1 Score: " + player1Score);
  $('#player2Score').html("Player 2 Score: " + player2Score);

  $('#winStatePlayer1').hide();
  $("#playerScores").show();
  $("#questionContainer").show();
  $("#askQuestionButton").show();
  $("#talkShowHost").show();
  $("#reset").hide();
  // $("#resetButton").hide();

displayCurrentPlayer();

}

$("#resetButton").on("click", function(){

  reset();

})


  //end of document.ready function//
});
