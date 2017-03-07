// Higher order functions
var animals = [
	{'name':'Bruno','species':'dog'},
	{'name':'Lucy','species':'dog'},
	{'name':'BigO','species':'Orangutan'},
	{'name':'Fluffykins','species':'cat'},
	{'name':'Alex','species':'Lion'}
];

var dog = [];
// Simple for loop
for(var i=0; i<animals.length; i++) {
	if(animals[i].species === 'dog') {
		dog.push(animals[i]);
	}
}

console.log(dog);
// -> ["Bruno", "Lucy"]

// Using filter 
var dogs = animals.filter(function(animal) {
	return animal.species === 'dog';
})

