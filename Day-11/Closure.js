//An example of closure in javascript
function completeName(firstName,lastName)
{
   var intro = "Your name is "
   function showName()
   {
      return intro+firstName+" "+lastName
   }
   return showName()
}
console.log(completeName("Joshita","Gaur"))

//->Your name is Joshita Gaur

