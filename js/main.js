var guess, calguess;
var answer = Math.floor((Math.random() * 100) + 1);
    console.log("The secret number is: " + answer);



function getguess(){
  var i = 0;
  for(i=0, i<3, i++){
  var guess = $("#userguess").val();
  var answerstore = answer;
  var calguess= answerstore - guess;

  console.log(guess);
  console.log(calguess);
  game();
  return calguess;
}
}

function game(){


if (calguess > 30){
  console.log("yep");
}
else {
  console.log("nope")
}

}
