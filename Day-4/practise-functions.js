function minimum(num1,num2)
{
    if(num1<num2)
       {
         return num1
       }
    else
       return num2
}
console.log(minimum(7,5))
console.log(minimum(4,9))

VM772:11 5
VM772:12 4
function isEven(num)
    {
      if(num == 0)
        return true
      else if(num == 1)
        return false
      else
        {
           if((num - 2)%2 == 0)
              return true
            else
              return false
         }
      }
console.log(isEven(8))
console.log(isEven(7))
console.log(isEven(0))
console.log(isEven(1))


VM1552:16 true
VM1552:17 false
VM1552:18 true
VM1552:19 false
function countBs(bean)
    {
      var count = 0
      for(var i = 0; i<= bean.length; i++)
         {
           
           if(bean.charAt(i) == 'B')
              {
                count = count + 1
              }
          }
       return count
     }
console.log(countBs("bbBBBggghhhBBBbbb"))
VM2175:15 6
function countChar(bean,find)
    {
      var count = 0
      for(var i = 0; i<= bean.length; i++)
         {
           
           if(bean.charAt(i) == find)
              {
                
                count = count + 1
                
              }
          }
       return count
     }
console.log(countChar("bbBBBggghhhBBBbbb", "g"))
VM2184:17 3