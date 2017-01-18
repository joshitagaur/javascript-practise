function Person(saying) {
	this.saying = saying;
}
Person.prototype.talk = function() {
console.log('I am saying'+' '+this.saying);
}
var anotherPerson = new Person('Hello!');
anotherPerson.talk();
// I am saying Hello!
// new is doing following 4 things:
// Its creating a new empty object- 
// Its going set the properties(prototype) of older object to new object
// Its going to call the function called constructor- context of this would be new object
// Its returning the newly created object

//Implementing new on your own
function Person(saying) {
	this.saying = saying;
}
Person.prototype.talk = function() {
	console.log('I am saying'+' '+this.saying);
}

function understandNew(constructor)  {
	var obj = {};
	Object.setPrototypeOf(obj,constructor.prototype);
	//var args = Array.from(arguments);//not part of ECMA 5
	var args = Array.prototype.slice.apply(arguments); //part of ECMA 5
	//console.log(args.slice(1));
	constructor.apply(obj,args.slice(1));//apply 
	//constructor.apply(obj,['Hello!']) //Donot want to hardcode this value and 
	//pass so we are using arguments(which is not an array so need to convert it to array)
	return obj;
}

var anotherPerson = understandNew(Person,'Hello!');
anotherPerson.talk();
//I am saying Hello!

function Person(saying) {
	this.saying = saying;
	
}
Person.prototype.talk = function() {
console.log('I am saying'+' '+this.saying);
}

function understandNew(constructor)  {
	var obj = {};
	Object.setPrototypeOf(obj,constructor.prototype);
	//var args = Array.from(arguments);//not part of ECMA 5
	var args = Array.prototype.slice.apply(arguments); //part of ECMA 5
	//console.log(args.slice(1));
	constructor.apply(obj,args.slice(1));//apply 
//constructor.apply(obj,['Hello!']) //Donot want to hardcode this value and pass so we are using arguments(which is not an array so need to convert it to array)
	return  obj;
}

var anotherPerson = understandNew(Person,'Hello!');

anotherPerson.talk();
//I am saying Hello!