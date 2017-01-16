//Remember prototype are delegates and classes are blueprints

function talk() {
	console.log(this.sound)
}

let animal = {
	talk: talk
}

let cat = {
	sound : "meow"
}

cat.talk();
//cat.talk is undefined

function talk() {
	console.log(this.sound)
}

let animal = {
	talk: talk
}

let cat = {
	sound : "meow"
}
cat.setPrototypeOf(cat,animal);
cat.talk();
//meow
//Even if talk property is present in animal object the context of this is 'cat' here


function talk() {
	console.log(this.sound)
}

let animal = {
	talk: talk
}

let cat = {
	sound : "meow"
}

let dog = {
	sound : 'woof'
}
Object.setPrototypeOf(cat,animal);
Object.setPrototypeOf(dog,animal);
cat.talk();
dog.talk();

//meow
//woof

function talk() {
	console.log(this.sound)
}

let animal = {
	talk: talk
}

let cat = {
	sound : "meow"
}

let dog = {
	sound : 'woof'
}

let prarieDog = {
	howl: function() {
	console.log(this.sound.toUpperCase());
}
}

Object.setPrototypeOf(dog,animal);
Object.setPrototypeOf(prarieDog,dog)

dog.talk();
prarieDog.talk();
//woof
//WOOF

function talk() {
	console.log(this.sound)
}

let animal = {
	talk: talk
}

let cat = {
	sound : "meow"
}

let dog = {
	sound : 'woof'
}

let prarieDog = {
	howl: function() {
	console.log(this.sound.toUpperCase());
}
}

Object.setPrototypeOf(dog,animal);
animal.talk = function() {
	console.log('I am a little teapot!');
}
dog.talk();
//I am a little teapot!