var anObject = {left: 1, right: 2}; 
console.log(anObject.left); 
VM326:3 1
delete anObject.left; 
console.log(anObject.left); 
VM327:3 undefined
console.log("left" in anObject); 
VM328:2 false
console.log("right" in anObject); 
VM329:2 true
var object1 = {value: 10}; 
var object2 = object1; 
var object3 = {value: 10};
console.log(object1 == object2); 
VM330:5 true console.log(object1 == object3); 
VM331:2 falseobject1.value = 15;
console.log(object2.value);
VM332:3 15