//Working of Object.create 
// Donot use setPrototypOf because it affects the performance of js engine
const cat = {
	makesound: function() {
		console.log(this.sound);
	}
}

function objectCreate(proto) {
	let obj = {}
	Object.setPrototypeOf(obj,proto);
	return obj;
}



let mark = objectCreate(cat);
mark.sound = 'meoww';
mark.makesound();

//meoww

//Creates a new object with prototype set to a certain object

let waffle = objectCreate(cat);
waffle.sound = 'meowrrr';
waffle.makesound();
//meowrrr