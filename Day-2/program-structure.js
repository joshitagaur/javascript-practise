//Finding square of a number using alert and prompt functions
var theNumber = Number(prompt("Enter a number"));
if(!isNaN(theNumber))
{
      var square = theNumber * theNumber
      alert("Square of your number is" + square);
}
else
      alert("Why dont you enter a number?")

//Increment counter by 2 using while loop
var counter =1
var num =0 
while(num <=5)
{
   counter *=2
   num +=1
   console.log(counter)
}
//->2
//->4
//->8
//->16
//->32
//->64

//do while loop
do
{   
   var name = prompt("Enter your name")
}
while(!name)
console.log(name)
//->joshita

//for loop with break statementfor (var current = 6; ; current++) { if (current % 5 == 0)   break; } console.log(current);
//->10

//switch caseswitch(prompt("What is your name?"))
{
  case "Jos":
  alert("Awesum")
  break;
  case "Meghna":
  alert("Sweet")
  break;
  case "Nisha":
  alert("Nice")
  break;
  default:
  alert("Good to see you")
  break;
}