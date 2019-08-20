//test to see if document link is working
console.log(quizQuestions);
var counter = 15; // var that holds our counter
var timer; // holds the timer for the game
var currentQuestion = 0;
var score = 0; //score var
var lost = 0; //lost var


//////////////////////////////////////////////////////////////////////


// if the timer is over go to the next question
function nextQuestion() {
  
    clearInterval(timer);
  var isQuestionOver = quizQuestions.length - 1 === currentQuestion;

  if (isQuestionOver) {
    console.log("Game is over");
    displayResults();
  } else {
    currentQuestion++;
    loadQuestion();
    
  }

 
 
}



/////////////////////////////////////////////////////////////////


// when time is up clear timer and move to the next question and increase lost by 1
function timeUp() {
  clearInterval(timer);
  lost++;
  //   preloadImage("correctAnswer");
  nextQuestion();
  
}

//start a 15 second timer for user to respond to each question

function countDown() {
  counter--;
  $("#time").html("<h2> Time Left: " + counter + "</h2>");

  if (counter === 0) {
    timeUp();
    
  }
  
}

//////////////////////////////////////////////////////////////////

// Display the questions and choices to the browser
function loadQuestion() {
  clearInterval(timer);
  counter = 15;
  timer = setInterval(countDown, 1000);

  

  
  var question = quizQuestions[currentQuestion].question; //
  var choices = quizQuestions[currentQuestion].choices; //
  var image = quizQuestions[currentQuestion].image //

  $("#time").html("<h2> Time Left: " + counter + "</h2>");

  //append to id game
  $("#game").html(`
    <img src = "${image}"/>
    <h4> ${question} </h4>
    ${loadChoices(choices)}
    ${loadRemainingQuestions()}
    `);
}


// load question function
function loadChoices(choices) {
  var result = "";
  

  for (var i = 0; i < choices.length; i++) {
    
    result += `<button class=" btn btn-primary choice button-color" data-answer="${
      choices[i] 
    }">${choices[i]}</button>`;
    
  }
  

  return result;
}

//////////////////////////////////////////////////////////////////////////////////


// Either wrong and right answer selected, go to the next question

$(document).on("click", ".choice", function() {
  
  var selectedAnswer = $(this).attr("data-answer");
  var correctAnswer = quizQuestions[currentQuestion].correctAnswer;
  

  if (correctAnswer === selectedAnswer) {
    console.log("yes");
    score++;
    nextQuestion();
    

    

    
    
  } else {
    lost++;
    console.log("no");
    nextQuestion();
    
  }





});

////////////////////////////////////////////////////////////////////////////////

// display the results

function displayResults() {
  var result = `
<p> You got ${score} question(s) correct</p>
<p> You got ${lost} question(s) incorrect </p>
<p> You got a total of ${quizQuestions.length} question(s)</p>
<button class="btn btn-primary button-color" id="reset"> Reset Game </button>
    `;
  $("#game").html(result);
  
  
  reset();

  
}

function reset() {
  
  $(document).on("click", "#reset", function() {
    
    console.log("reset clicked");
    counter = 5; // var that holds our counter
    timer = null; // holds the timer for the game
    currentQuestion = 0;
    score = 0; //score var
    lost = 0; //lost var

    loadQuestion();
   
  });
  
}

function loadRemainingQuestions() {
  
  var remainingQuestion = quizQuestions.length - (currentQuestion + 1);
  var totalQuestion = quizQuestions.length;
  

  // returns remaining questions into the page with p tag
  return `<br><br>  <p>Remaining Question: ${remainingQuestion}/${totalQuestion}</p>`;
}

////////////////////////////////////////////////////////////////////////////////////////////////

// starts the game when #start game is clicked
$("#start").click(function() {
  $("#start").remove();
  $("#time").html(counter);
  $('#primary').addClass("container-background");
  
  loadQuestion();

});
