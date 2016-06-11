//Javascript methods using this keyword
function say(line){
  console.log("The "+ this.rabbit +" says "+line);
}
var whiteRabbit = {rabbit:"white rabbit",speak:say};
var pinkRabbit = {rabbit:"pink rabbit",speak:say};

whiteRabbit.speak("i am super smart");//->"The white rabbit says i am super smart"

pinkRabbit.speak("i am super awesum");//-> "The pink rabbit says i am super awesum"