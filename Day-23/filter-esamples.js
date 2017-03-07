// Filtering invalid enteries from JSON
var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var invalidEntries = 0;

var filteredArray = arr.filter(function(array) {
	return typeof(array.id) === 'number' && array.id != undefined && !isNaN(array.id); 
});

console.log(filteredArray);
// [
// 	{ id: 15 },
//  { id: -1 },
//  { id: 0 },
//  { id: 3 },
//  { id: 12.2 }
// ]