const cat = {
	makesound: function() {
		console.log(this.sound);
	}
}

let mark = Object.create(cat);
mark.sound = 'meoww';
mark.makesound();
//meoww
//Creates a new object with prototype set to a certain object

let waffle = Object.create(cat);
waffle.sound = 'meowrrr';
waffle.makesound();
//meowrrr

console.log('Is mark a cat?',cat.isPrototypeOf(mark));
//Is mark a cat? true
