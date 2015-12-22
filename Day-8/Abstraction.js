//Abstraction Examples
//Using simple for loop
array = [1,2,3,4]

var j = array.length
for(var i = 0;i<j;i++)
{
   console.log(array[i])
}
//-> 1 2 3 4
//Using abstraction
function logEach(array)
{
   for(var i = 0;i<j;i++)
   {
      console.log(array[i])
    }
}

function forEach(array,action)
{
   for(var i = 0;i<j;i++)
   {
      action(array[i])
   }
}

logEach(array)
forEach(array,alert)  
//-> 1 2 3 4