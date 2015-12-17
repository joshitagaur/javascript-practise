function range(start,end)
{
    for(var i = start; i<=end ; i++)
    {
      console.log(i);
    }
}
range(1,9)

function sum(array)
{     
      var total = 0
     for(var i = 0; i< array.length; i++)
      {
       total = total + array[i]
       }
       return total
}
sum([1,2,3,4,5,6,7,8,9,10])
55

function range(start,end,step)
{
    if (step == undefined)
      step = 1
   while(start < end)
    {
       
      start += step
      console.log(start)
    }
    if (start > end && step <0)
     {
       while(start > end)
        {
          start += step
          console.log(start)
        }
      }
}
range(1,5,2)
range(50,40,-1)
range(10,20)


VM265:10 3
VM265:10 5
VM265:17 49
VM265:17 48
VM265:17 47
VM265:17 46
VM265:17 45
VM265:17 44
VM265:17 43
VM265:17 42
VM265:17 41
VM265:17 40
VM265:10 11
VM265:10 12
VM265:10 13
VM265:10 14
VM265:10 15
VM265:10 16
VM265:10 17
VM265:10 18
VM265:10 19
VM265:10 20