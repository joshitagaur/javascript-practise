//finding power of a number using function
var power = function(base,exponent)
{
    if(exponent == undefined) //if no exponent is passed, it behaves as square function
         exponent = 2;
    var result = 1;
    for(var count = 0; count < exponent ; count++)
    {
       result *= base         
    }
       return result
}
console.log(power(3)) //Math.pow(base, exp)
console.log(power(3,4))
//->9
//->81

//finding power of a number using function
var power = function(base,exponent)
{
    if(exponent != undefined)
       {
         var result = 1;
         for(var count = 0; count < exponent ; count++)
            {
                result *= base;
            }
         }
      else
          result = base;
      return result
}
console.log(power(3))
console.log(power(3,4)) 
//->3
//->81