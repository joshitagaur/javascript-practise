// Filter array based on search criteria
var fruits = ["apple","kiwi","mango","grapes","orange","banana"];

function filterFruits(query) {
	return fruits.filter(function(fruit) {
			return fruit.toLowerCase().indexOf(query.toLowerCase()) > -1;
	})
}

console.log(filterFruits('ap'));
// -> ["apple", "grapes"]