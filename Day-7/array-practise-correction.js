//reverseArray takes an array as argument and produces a new array that has the same elements in the reverse order

var array2 = []
function reverseArray(array)
{
    var i = array.length-1
    for(i ; i>=0; i--)
    {
        array2.push(array[i])
    }
    return array2
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