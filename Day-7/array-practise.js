/*reverseArray takes an array as argument and produces a new array that has the same elements in the inverse order*/

var arr2 = []
function reverseArray(arr)
{
    for(var i = arr.length-1 ; i>=0; i--)
    {
        var j = 0       
        j = arr[i]
        arr2.push(j)
    }
    console.log(arr2)
}
reverseArray([1,2,3,4,5])
/*Output*/ [5, 4, 3, 2, 1]

/*reverseArray takes an array as argument and produces a new array that has the same elements in the inverse order*/
function reverseArrayInPlace(arr)
{
     var i = 0
     var j = 0
     var temp = 0
     for(i = 0, j = arr.length-1; i<j; i++, j--)
     {
       var tem = arr[i]
       arr[i] = arr[j]
       arr[j] = temp
      }
return arr
}
reverseArrayInPlace([1,2,3,4,5])
/*output*/ [5, 4, 3, 0, 0] /*incorrect output*/


//reverseArray takes an array as argument and produces a new array that has the same elements in the reverse order

function reverseArray(numberArray)
{
    var reversenumberArray = []
    var i = numberArray.length-1
    for(i ; i>=0; i--)
    {
        reversenumberArray.push(numberArray[i])
    }
    return reversenumberArray
}

var desiredArray = reverseArray([1,2,3,4])
console.log(desiredArray)
//->[4, 3, 2, 1]

//reverseArray takes an array as argument and produces a new array that has the same elements in the reverse order
function reverseArrayInPlace(array)
{
     var i = 0
     var j = array.length-1
     var temp = 0
     for(i , j ; i<j; i++, j--)
     {
       var temp = array[i]
       array[i] = array[j]
       array[j] = temp
      }
return array
}
console.log(reverseArrayInPlace([1,2,3,4,5]))
//->[5, 4, 3, 2, 1]
