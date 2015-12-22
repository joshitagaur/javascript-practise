//Deep comparision using '===' operator
function deepEqual(value1,value2)
{
   if(value1 == null || value2 == null)
   {
      return false;
   }
   if(typeof(value1) === typeof(value2))
   {
       if(value1 == value2)
       {
           return true;
        }
    else
       return false;
    }
}

var car1 = 'bmw'
car1.average = 50
car1.color = 'red'
car1.powersteering = 'yes'

var car2 = 'fiat'
car2.average = 60
car2.color = 'white'
car2.powersteering = 'yes'

console.log(deepEqual(3,4))
console.log(deepEqual())
console.log(deepEqual(car1.color,car2.color))
console.log(deepEqual(car1.powersteering,car2.powersteering))
//-> Output
//-> false
//-> false
//-> false 
//-> false (incorrect)