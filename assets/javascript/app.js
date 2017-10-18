//alert("i'm ready");


//variables for anwer choices

//reset game to start back at button screen

//start game function? start game is false, when you click start questons start
function startGame () {

};

//timer for the game (in seconds)
var time = 120;
var starTime;
//To start and stop timer
$("#startButton").on("click", run);
$("#submitButton").on("click", stop);

//This decreases timer in 1 second intervals
function run() {
  startTime = setInterval(decrement, 1000);
}

function decrement() {
  time--;

  $("#timer").html("<h2>" + time + "</h2>");

  if (time === 0){
    stop();
  }
}
//To Stop the function from running at 0
function stop() {
  clearInterval(startTime);
}

run();
//answer selections

//submit quiz button

//need a end funciton for game (when timer is 0 game ends)

//need to calculate total number of correct and incorrect answers at the end of game
//.text or html (results)
$(document).ready(function (){
});
