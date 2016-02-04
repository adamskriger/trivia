$( document ).ready(function() {
  console.log("ready!")


//These are hidden divs that appear only when called
  $("#answerContainer").hide();
  $("#winStatePlayer1").hide();


var counter = 3;
var player1Score = 0;
var player2Score = 0;

function Question(question, answer, incorrectAnswer1, incorrectAnswer2) {

  this.question = question;
  this.answer = answer;
  this.played = false;
  this.incorrectAnswer1 = incorrectAnswer1;
  this.incorrectAnswer2 = incorrectAnswer2;


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

var question1 = new Question('How old was Steve Jobs when he founded Apple?','20 years old', '25 years old', '32 years old');
var question2 = new Question('How long did it take for Facebook to turn a profit?','5 years', '3 years', 'FB is still not profitable');
var question3 = new Question('In what city was General Assembly founded?','New York City', 'San Francisco', 'Chicago');
var question4 = new Question('How many monthly users does Instragram have?','300 million', '150,000', 'Who uses Instagram?');
var question5 = new Question('What does I.P.O. stand for?','Initial Public Offering', 'Internet Pursuing Others', 'Instant Price Offering');


//create constructor function to create player objects

function Person(firstName) {
    this.firstName = firstName;
    this.myTurn = false;
    this.score = 0;

}

//create instances of people who will be playing
var player1 = new Person();
var player2 = new Person();

  // function Person(first, last, age, eye) {
  //     this.firstName = first;
  //     this.lastName = last;
  //     this.age = age;
  //     this.eyeColor = eye;
  // }


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


//Allow user to select  an answer choice
//make an event handler for each one of the boxes



//Compare user's selected option to correct answerContainer



//assign points to player if answer is correct



  //this puts the question into the div with id questionContainer
  // $( "#askQuestionButton" ).click(function() {
  //   console.log( "Handler for .click() called." );
  // });


  var ArrayOfQuestions = [question1, question2, question3, question4, question5 ];

  $( "#askQuestionButton" ).on( "click", function() {
    shuffle(ArrayOfQuestions);
    for (var i=0; i < ArrayOfQuestions.length; i++) {
    $('#questionContainer').html(ArrayOfQuestions[i].question);
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


//end of event handler click on ask question button
});

//Clicking on #choice 1

$("#choice1").on("click", function() {




  console.log(player1.myTurn);
  console.log(player2.myTurn);

  if ($('#choice1').html() === $('#answerContainer').html() && player1.myTurn === true) {
    player1Score++;
    counter++;
    setPlayerTurn();
    console.log("This is player1Score " + player1Score);
    console.log("This is player2Score " + player2Score);
    console.log("This is player1 myturn: " + player1.myTurn);
    console.log("This is the counter: " + counter);
  }

  else if ($('#choice1').html() === $('#answerContainer').html() && player2.myTurn === true) {
    player2Score++;
    counter++;
    setPlayerTurn();
    console.log("This is player1 score: " + player1Score);
    console.log("This is player2 score: " + player2Score);
    console.log("This is player2 myturn: " + player2.myTurn);
    console.log("This is the counter: " + counter);
  }

//this is the code that increments the counter when a wrong answer choice is clicked upon:
  else if ($('#choice1').html() !== $('#answerContainer').html() && player2.myTurn === true)
  {

    counter++;
    setPlayerTurn();
  }

  else if ($('#choice1').html() !== $('#answerContainer').html() && player1.myTurn === true)
  {
    choiceId = window.setInterval(shake,200);
    counter++;
    setPlayerTurn();
  }
 //end of code that increments the counter when a wrong answer choice is clicked upon:

  //This describes and sets the win states:

  if (player1Score > 2) {
    console.log("Player1 Wins");
    $('#winStatePlayer1').html("Player 1 Wins");
    $('#winStatePlayer1').show();

  }

  if (player2Score > 2) {
    console.log("Player1 Wins");
    $('#winStatePlayer1').html("Player 2 Wins");
    $('#winStatePlayer1').show();

  }

  //end win states//

  // setPlayerTurn();
  $("#answerContainer").show();
  //Display scores:
  $('#player1Score').html("Player 1 Score: " + player1Score);
  $('#player2Score').html("Player 2 Score: " + player2Score);
  displayCurrentPlayer();



});

//Clicking on #choice 2
$("#choice2").on("click", function() {
  console.log(player1.myTurn);
  console.log(player2.myTurn);

  if ($('#choice2').html() === $('#answerContainer').html() && player1.myTurn === true) {
    player1Score++;
    counter++;
    setPlayerTurn();
    console.log("This is player1Score " + player1Score);
    console.log("This is player2Score " + player2Score);
    console.log("This is player1 myturn: " + player1.myTurn);
    console.log("This is the counter: " + counter);
  }

  else if ($('#choice2').html() === $('#answerContainer').html() && player2.myTurn === true) {
    player2Score++;
    counter++;
    setPlayerTurn();
    console.log("This is player1 score: " + player1Score);
    console.log("This is player2 score: " + player2Score);
    console.log("This is player2 myturn: " + player2.myTurn);
    console.log("This is the counter: " + counter);

  }

  //this is the code that increments the counter when a wrong answer choice is clicked upon:
    else if ($('#choice2').html() !== $('#answerContainer').html() && player2.myTurn === true)
    {
      counter++;
      setPlayerTurn();
    }

    else if ($('#choice2').html() !== $('#answerContainer').html() && player1.myTurn === true)
    {
      counter++;
      setPlayerTurn();
    }
   //end of code that increments the counter when a wrong answer choice is clicked upon:

  //This describes and sets the win states:
  if (player1Score > 2) {
    console.log("Player1 Wins");
    $('#winStatePlayer1').html("Player 1 Wins");
    $('#winStatePlayer1').show();

  }

  if (player2Score > 2) {
    console.log("Player1 Wins");
    $('#winStatePlayer1').html("Player 2 Wins");
    $('#winStatePlayer1').show();

  }

  //end win states//

  // setPlayerTurn();
  $("#answerContainer").show();
  //Display scores:
  $('#player1Score').html("Player 1 Score: " + player1Score);
  $('#player2Score').html("Player 2 Score: " + player2Score);
  displayCurrentPlayer();


});
//Clicking on #choice 3
$("#choice3").on("click", function() {
  console.log(player1.myTurn);
  console.log(player2.myTurn);

  if ($('#choice3').html() === $('#answerContainer').html() && player1.myTurn === true) {
    player1Score++;
    counter++;
    setPlayerTurn();
    console.log("This is player1Score " + player1Score);
    console.log("This is player2Score " + player2Score);
    console.log("This is player1 myturn: " + player1.myTurn);
    console.log("This is the counter: " + counter);
  }

  else if ($('#choice3').html() === $('#answerContainer').html() && player2.myTurn === true) {
    player2Score++;
    counter++;
    setPlayerTurn();
    console.log("This is player1 score: " + player1Score);
    console.log("This is player2 score: " + player2Score);
    console.log("This is player2 myturn: " + player2.myTurn);
    console.log("This is the counter: " + counter);

  }

  //this is the code that increments the counter when a wrong answer choice is clicked upon:
    else if ($('#choice1').html() !== $('#answerContainer').html() && player2.myTurn === true)
    {
      counter++;
      setPlayerTurn();
    }

    else if ($('#choice1').html() !== $('#answerContainer').html() && player1.myTurn === true)
    {
      counter++;
      setPlayerTurn();
    }
   //end of code that increments the counter when a wrong answer choice is clicked upon:



  //This describes and sets the win states:
  if (player1Score > 2) {
    console.log("Player1 Wins");
    $('#winStatePlayer1').html("Player 1 Wins");
    $('#winStatePlayer1').show();

  }

  if (player2Score > 2) {
    console.log("Player1 Wins");
    $('#winStatePlayer1').html("Player 2 Wins");
    $('#winStatePlayer1').show();

  }

  //end win states//

  // setPlayerTurn();
  $("#answerContainer").show();
  //Display scores:
  $('#player1Score').html("Player 1 Score: " + player1Score);
  $('#player2Score').html("Player 2 Score: " + player2Score);
  displayCurrentPlayer();


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


  //end of document.ready function//
});
