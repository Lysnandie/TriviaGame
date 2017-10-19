//alert("i'm ready");
$(document).ready(function(){


//variables for answers
var correct = 0;
var incorrect = 0;
var unanswered = 0;


//hidden DIVs at start of game
$("#quiz").hide();
$("#results").hide();

//start game function, when you click start questons and time starts

$("#startButton").on("click", function(){
  $("#startPage").hide();
  $("#quiz").show();
  run();
});




//timer for the game (in seconds)
var time = 80;
var starTime;

//This decreases timer in 1 second intervals
function run() {
  startTime = setInterval(decrement, 1000);
}

function decrement() {
  time--;

  $("#timer").html("<h2>" + time + "</h2>");

//When time hits 0, timer wills top and results will show
  if (time === 0){
    $("#results").show();
    $("#quiz").hide();
    stop();
  }
}
//To Stop the function from running at 0
function stop() {
  clearInterval(startTime);
}


//submit quiz button
$("#submitButton").on("click", function(){
  $("#quiz").hide();
  $("#results").show();

  stop();
  endGame();
});

//Quiz Answer validations
function endGame(){
  var question1 = $("input[type='radio'][name='question1']:checked").val();
console.log(question1);
  if (question1 === "Deborah Cox") {
  correct++;
  }
  else if (question1 === undefined)
  {
    unanswered++;
  }
  else {
    incorrect++;
  }


  var question2 = $("input[type='radio'][name='question2']:checked").val();

  if (question2 === "Keith Sweat") {
  correct++;
  }
  else if (question2 === undefined)
  {
    unanswered++;
  }
  else {
    incorrect++;
  }

  var question3 = $("input[type='radio'][name='question3']:checked").val();

  if (question3 === "1996") {
  correct++;
  }
  else if (question3 === undefined)
  {
    unanswered++;
  }
  else {
    incorrect++;
  }

  var question4 = $("input[type='radio'][name='question4']:checked").val();

  if (question4 === "Doo Wop (That Thing)") {
  correct++;
  }
  else if (question4 === undefined)
  {
    unanswered++;
  }
  else {
    incorrect++;
  }



  var question5 = $("input[type='radio'][name='question5']:checked").val();

  if (question5 === "Right Here (Human Nature Remix)-Multiple Artist") {
  correct++;
  }
  else if (question5 === undefined)
  {
    unanswered++;
  }
  else {
    incorrect++;
  }


  var question6 = $("input[type='textbox'][name='question6']").val();

//converets user input to lowercase

  if (question6.toLowerCase() === "space jam") {
  correct++;

  }

  else  {
  incorrect++;
  }


  var question7 = $("input[type='radio'][name='question7']:checked").val();

  if (question7 === "My Lovin'") {
  correct++;
  }
  else if (question7 === undefined)
  {
    unanswered++;
  }
  else {
    incorrect++;
  }


  var question8 = $("input[type='radio'][name='question8']:checked").val();

  if (question8 === "Poison-Bell Biv Devoe, Weak-SWV, Creep-TLC, Are You That Somebody-Aaliyah") {
  correct++;
  }
  else if (question8 === undefined)
  {
    unanswered++;
  }
  else {
    incorrect++;
  }


//Calculate total number of correct, incorrect, and unanswered answers at the end of game

$("#correct").text("You got" + " " + correct + " " + "correct!");
$("#incorrect").text("You got" + " " + incorrect + " " + "incorrect");
$("#unanswered").text("You left" + " " + unanswered + " " +"unanswered");

}
});
