$( document ).ready(function() {
    console.log( "ready!" );




  function Question(question, answer) {

  this.question = question;
  this.answer = answer;
  this.played = false;


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

  var question1 = new Question('What is a question?','That was question');
  var question2 = new Question('What is a dog?','That was a dog');
  var question3 = new Question('What is a cat?','That was a cat');
  var question4 = new Question('What is a horse?','That was a horse');
  var question5 = new Question('What is a monkey?','That was a monkey');



  // function person(first, last, age, eye) {
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
  }
});





  //end of document.ready function//
});
