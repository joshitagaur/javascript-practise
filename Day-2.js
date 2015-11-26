alert("Good morning")
undefined
console.log("Good morning")
VM271:2 Good morning
undefined
prompt("What is your name?")
""
confirm("Shall we begin?")
truevar theNumber = Number(prompt("Enter a number"));
if(!isNaN(theNumber))
   {
      alert("Square of your number is" + theNumber*theNumber);
   }
else
    alert("Why dont you enter a number?")var counter =1
var num =0 
while(num <=5)
{
   counter *=2
   num +=1
   console.log(counter)
}
VM195:8 2
VM195:8 4
VM195:8 8
VM195:8 16
VM195:8 32
VM195:8 64 do
{
   var name = prompt("Enter your name")
}
while(!name)
console.log(name)
VM363:7 jos var result = 1; 
for (var counter = 0; counter < 10; counter = counter + 1)
result = result * 2; 
console.log(result); 
VM365:5 1024for (var counter = 20; ; counter = counter + 1)
{
   if(counter % 5 == 0);
   break
} 
console.log(counter); 
VM367:7 20switch(prompt("What is your name?"))
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