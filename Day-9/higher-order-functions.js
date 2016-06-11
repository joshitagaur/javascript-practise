//Higher order functions
function isGreaterThan(number1)
{
  return function(number2)
   {
      return number2 > number1
   }
}
var isGreaterThan10 = isGreaterThan(10);
console.log(isGreaterThan10(11))
//-> true

//Changing values inside a function using Higher order functions 
function changeValue(value1)
{
  return function(value2)
    {
      console.log("calling with " + value2)
      var temp = value1(value2)
      console.log("called with " + value2 + " got " + temp)
      return temp
    }
}
changeValue(Boolean)(0)
//->calling with 0
//->called with 0 got false