//Higher order functions
function greaterThan(number1)
{
  return function(number2)
   {
      return number2 > number1
   }
}
var greaterThan10 = greaterThan(10)
console.log(greaterThan10(11))
//-> true

//Changing values inside a function using Higher order functions function changeValue(value1)
{
  return function(value2)
    {
      console.log("calling with" + value2)
      var temp = value1(value2)
      console.log("called with" + value2 + "got" + temp)
      return temp
    }
}
changeValue(Boolean)(0)
//->calling with0
//->called with0gotfalse