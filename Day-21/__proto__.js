let dog = {breed:'Lab'}
let myDog = {name:'Bruno'}
Object.setPrototypeOf(myDog,dog)

myDog.__proto__
//it has reference to dog object(there is no instance of dog object created)
// Object {breed: "Lab"}
dog.color= 'black';

myDog.__proto__
// Object {breed: "Lab", color: "black"}
myDog.color
//"black"
// Remember Prototype as delegation