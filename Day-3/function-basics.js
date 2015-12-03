var square = function(x)
{
  return x*x;
}
console.log(square(4))
VM314:6 16 var x = 'outside'
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
VM808:8 outside
VM808:14 inside var x = function()
{
    var result = "";
    var flat = function(size)
    {
        for(var count = 0; count<size; count++)
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
VM1593:21 --'''''---'''''''																											