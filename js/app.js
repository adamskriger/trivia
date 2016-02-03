$( document ).ready(function() {
    console.log( "ready!" );




  function Question(question, answer, incorrectAnswer1, incorrectAnswer2) {

  this.question = question;
  this.answer = answer;
  this.played = false;
  this.incorrectAnswer1 = incorrectAnswer1
  this.incorrectAnswer2 = incorrectAnswer2


  this.display = function(){
      //when a button is clicked,
      //this.display will change the class of the function
      //to displaying which will cause it to be shown
  }


  }


//shuffle based on fisher-yeats algori:

  shuffle = function(o){
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

  //creates instances of questions

  var question1 = new Question('What is a question?','That was question', 'incorrectAnswer1', 'incorrectAnswer2');
  var question2 = new Question('What is a dog?','That was a dog', 'incorrectAnswer1', 'incorrectAnswer2');
  var question3 = new Question('What is a cat?','That was a cat', 'incorrectAnswer1', 'incorrectAnswer2');
  var question4 = new Question('What is a horse?','That was a horse', 'incorrectAnswer1', 'incorrectAnswer2');
  var question5 = new Question('What is a monkey?','That was a monkey', 'incorrectAnswer1', 'incorrectAnswer2');


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


  //this puts the question into the div with id questionContainer
  // $( "#askQuestionButton" ).click(function() {
  //   console.log( "Handler for .click() called." );
  // });


  var ArrayOfQuestions = [question1, question2, question3, question4, question5 ];

  $( "#askQuestionButton" ).on( "click", function() {
    console.log("Ask Question Button pressed");
    shuffle(ArrayOfQuestions);
    for (var i=0; i < ArrayOfQuestions.length; i++) {
    $('#questionContainer').html(ArrayOfQuestions[i].question);
    $('#answerContainer').html(ArrayOfQuestions[i].answer);


  //The following function shuffles the answer choices and places them in an array:
  function incorrectAnswersShuffler(question, answer, incorrectAnswer1, incorrectAnswer2) {
    var incorrectAnswersArray = [answer, incorrectAnswer1, incorrectAnswer2];
    console.log(incorrectAnswersArray);
    shuffle(incorrectAnswersArray);
    console.log(incorrectAnswersArray);
    //now we have to place the shuffled answers into the divs that contain the mc answer choices:
    $('#choice1').html(incorrectAnswersArray[0]);
    $('#choice2').html(incorrectAnswersArray[1]);
    $('#choice3').html(incorrectAnswersArray[2]);

}



  incorrectAnswersShuffler(ArrayOfQuestions[i].question, ArrayOfQuestions[i].answer, ArrayOfQuestions[i].incorrectAnswer1, ArrayOfQuestions[i].incorrectAnswer2);

}



});





  //end of document.ready function//
});
