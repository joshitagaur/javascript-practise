//Function to find square of a number
var square = function(x)
{
  return x*x;
}
var squareofnumber = square(9)
console.log(squareofnumber)
//->81


//finding scope of a variable inside and outside a function
var x = 'outside'
var f1 = function()
{
   var x ='inside'
}
f1();
console.log(x)
var f2 = function()
{
   x = 'inside'
}
f2();
console.log(x)

//->outside
//->inside
 

//Function to create a pattern
var x = function()
{
    var result = "";
//    var count = 0
    var flat = function(size)
    {
        for(var count = 0; count < size; count++)
           result += "-"
     }
    var mount = function(height)
    {
        for(var count = 0; count < height; count++)
            result += "'"
     }
     flat(2)
     mount(5)
     flat(3)
     mount(7)
     return result
 }
console.log(x())
//->--'''''---'''''''																	