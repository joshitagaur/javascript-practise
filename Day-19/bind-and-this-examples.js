function talk() {
	console.log(this.sound);
}
let dog = {
	sound : "woof"
}
talk();
// undefined

function talk() {
	console.log(this.sound);
}
let dog = {
	sound : "woof"
}
let boundFunction = talk.bind(dog);	
boundFunction();
talk();
// woof 
// undefined

function talk() {
	console.log(this.sound);
}
let dog = {
	speak : talk,
	sound : "woof"
}
dog.speak();
talk();
// woof
// undefined

function talk() {
	console.log(this.sound);
}
let dog = {
	sound : "woof"
}
dog.speak = talk.bind(dog);
let blabber = dog.speak;
blabber();
// woof

function talk() {
	console.log(this.sound);
}
let dog = {
	speak : talk,
	sound : "woof"
}
let cat = {
	makeSound: dog.speak,
	sound: "cat"
}
cat.makeSound();
// cat