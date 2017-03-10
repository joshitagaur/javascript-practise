// Create new array with unique numbers
var numbers = [1,2,3,3,4,4,5,7,8,7,9,0,6,4,5,9];

var uniqueNum = numbers.filter(function(current,index,num){
		return num.indexOf(current) === index;
})

// -> uniqueNum = [1, 2, 3, 4, 5, 7, 8, 9, 0, 6]