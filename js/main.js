
function guessedNumberfn(){
  return Math.floor((Math.random() * 100) + 1);
  var randomnum = guessedNumberfn();
  console.log(randomnum);
}

function getNumber(){
  var num = $("#userguess").val();

  if(num > 100){
    alert("Enter a valid number");
    return;
  }

  return num;
}

function calculateGuessfn(){
  var userGuess = parseInt(getNumber()),
      guessedNumber = guessedNumberfn();

      if(!userGuess){
        return;
      }

    console.log(guessedNumber);
  return userGuess - guessedNumber;
}
$(document).ready(function(){
function game(result){

  var count;

  if(result> 10){
  $("ul").append("Very Hot!!!");
  }

  if(result>10 && result<20){
  $("ul").append("GETTING WARMER");
  }

  if(result>20 && result<30){
  $("ul").append("COLD");

  }

  if(result>40){
  $("ul").append("ICE COLD!");
}

  //$("ul").append("STRIKES = 1");
}


//$(document).ready(function(){

  $("#btn").click(function(){
    var calGuess = calculateGuessfn();
    game(calGuess);
  });

});





// function getguess(){
//   var i = 0;
//   for(i=0, i<3, i++){
//   var guess = $("#userguess").val();
//   var answerstore = answer;
//   var calguess= answerstore - guess;
//
//   console.log(guess);
//   console.log(calguess);
//   game();
//   return calguess;
// }
// }
//
// function game(){
//
//
// if (calguess > 30){
//   console.log("yep");
// }
// else {
//   console.log("nope")
// }
//
// }
