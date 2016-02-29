//Constructor
function Rabbit(type)//constructor starts with capital letters
{
  this.type = type;
}
var killerRabbit = new Rabbit("Hyper");
console.log(killerRabbit.type);

//adding prototype to constructor
Rabbit.prototype.speak=function(say){
 console.log("the"+this.type+"rabbit"+"says"+say);
};
var blackRabbit = new Rabbit("black");
blackRabbit.speak("I will kill you");

//same name property in object and prototype
Rabbit.prototype.teeth="small";
console.log(killerRabbit.teeth);
killerRabbit.teeth = "large";
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);

//->"Hyper"
"theblackrabbitsaysI will kill you"
"small"
"large"
"small"
"small"