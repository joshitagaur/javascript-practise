//function to find minimum value from two given values
function minimum(num1,num2)
{
    if(num1<num2)
       {
         return num1
       }
    else
       return num2

    //return (num1 > num2) ? num1 : num2;
}
console.log(minimum(7,5))
console.log(minimum(4,9))
//->5
//->4

//function to find if a given number is even or not
function isEven(num)
    {
      /*if(num == 0)
        return true
      else if(num == 1)
        return false
      else
        {*/
           if((num)%2 == 0)
              return true
            else
              return false
         // }
      }
console.log(isEven(8))//->true
console.log(isEven(7))//->false
console.log(isEven(0))//->true
console.log(isEven(1))//->false


//function to count occurence of an alphabet in a word
function countBs(bean)
    {
      var count = 0
      for(var i = 0, ul = bean.length; i<= ul; i++)
         {
           
           if(bean.charAt(i) == 'B')//if(bean[i] === 'B')
              {
                count = count + 1; //count++
              }
          }
       return count;
     }
console.log(countBs("bbBBBggghhhBBBbbb"));
//->6

//function to count occurence of an alphabet in a word
function countChar(bean, find)
    {
      var count = 0
      var i = 0
      for(i; i<= bean.length; i++)
         {
           
           if(bean.charAt(i) === find)
              {
                
                count = count + 1
                
              }
          }
       return count
     }
console.log(countChar("bbBBBggghhhBBBbbb", "g"))
//->3