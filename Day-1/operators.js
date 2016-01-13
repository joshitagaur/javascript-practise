//Different operators

console.log(typeof(4.5))
//->number

console.log(NaN=NaN)

//->NaN

console.log(NaN==NaN)

//->false


//Automatic type conversion

console.log(8*null)
//->0

console.log("5"-1)
//->4
console.log("5"+1)
//->51

console.log("five"*2)
//->NaN


//comparing with null and undefined values
console.log(false==0)
//->true
console.log(null==undefined)
//->true
console.log(null==0)
//->false
console.log(null || "user")
//->"user"