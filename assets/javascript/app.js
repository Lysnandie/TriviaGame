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
var time = 120;
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


//Quiz Answers
function endGame(){
  var question1 = $("input[type='radio'][name='question1']:checked").val();

  if (question1 === "Deborah Cox") {
  correct++;
}
}
console.log(endGame);

//submit quiz button
$("#submitButton").on("click", function(){
  $("#quiz").hide();
  $("#results").show();

  stop();
  endGame();
});


//need to calculate total number of correct and incorrect answers at the end of game
//.text or html (results)

$("#results").text(correct);

});
