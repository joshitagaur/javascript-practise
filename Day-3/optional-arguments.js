var power = function(base,exponent)
{
    if(exponent == undefined)
       {
         exponent = 2;
         var result = 1;
         for(var count = 0; count < exponent ; count++)
            {
                result *= base
             }
         }
     else
         result = base ^ exponent
      return result
}
console.log(power(3))
console.log(power(3,4)) 
VM562:17 9
VM562:18 7
var power = function(base,exponent)
{
    if(exponent != undefined)
       {
         var result = 1;
         for(var count = 0; count < exponent ; count++)
            {
                result *= base
             }
         }
      else
          result = base
      return result
}
console.log(power(3))
console.log(power(3,4)) 