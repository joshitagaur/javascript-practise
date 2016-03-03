//Prototype interference
var map = {};
function storeValues(event,value){
  return map[event] = value;
}
storeValues("home","done");
storeValues("Office","gone");
Object.prototype.nonesense = "hi";
for(var i in map)
{
  console.log(i);
}
//->"home"
"Office"
"nonesense"

//Nonesense is not a property in map but it shows up, because it is ennumerable property
console.log("toString" in map);
//->true
//Gives true but doesn't show up in the console since it is nonennumerable property

delete Object.prototype.nonesense;
//use defineProperty to make properties nonennumerable
Object.defineProperty(Object.prototype,"nonesense",{ennumerable:false,value:"hi"});
//check for changes
for(var i in map)
{
  console.log(i);
}
//->"home"
"Office"

//In order to avoid this problem we can use hasOwnProperty method
Object.prototype.checkobject = "check for interference";
for(var i in map)
{
  console.log(i);
}

for(var i in map)
{
  if(map.hasOwnProperty(i))
  {
    console.log(i);
  }
}
//->"home"
"Office"
"checkobject"
"home"
"Office"
