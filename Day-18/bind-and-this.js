let dog = {
	sound : 'woof',
	talk : function() {
		console.log(this.sound);
	}
}
dog.talk();

// woof

let talkFunction = dog.talk;
talkFunction();
// undefined
// this is no longer dog, it has lost connection with dog
// it will simply be
// let talkFunction = function() {
// 	console.log(this.sound)
// }
// this doesnot refers to the context where the function was defined but refers to where the
// function is called

let boundFunction = talkFunction.bind(dog);
boundFunction();
// woof
// bind has bound dog to this keyword so bind returns a new function with dog bound to this 

let button = document.getElementById('myButton');

button.addEventListener('click',dog.talk);
// this is not going to be dog it will be window object
// solution
button.addEventListener('click',dog.talk.bind(dog));
// what is passed into addEventListener is not vanilla talk function but a new function with
// this bound to dog

