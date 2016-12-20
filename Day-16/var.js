for(var i=0; i<10; i++) {
    console.log(i);
}
console.log('after loop',i);

// Output:
// 1 2 3 4 5 6 7 8 9 after loop 10
// Works because JS only has two kinds of scope local(function level scope) and global scope.
// It doesnot have block level scope

function counter() {
	for(var i=0; i<10; i++) {
    	console.log(i);
	}
};
counter();
console.log('after function',i);

// Output:
// 1 2 3 4 5 6 7 8 9
// Gives Uncaught Reference Error : i is not defined
// Happens because of function level scope

(function() {
	for(i=0; i<10; i++) {
    	console.log(i);
	}
})();
console.log('after function',i);

// Output:
// 1 2 3 4 5 6 7 8 9 after function 10
// Since there is no variable declaration inside function, JS place sthe variable in the window 
// object (Variable Hoisting):
// 
// var i;
// (function() {
// 	for(i=0; i<10; i++) {
//     	console.log(i);
// 	}
// })();
// console.log('after function',i);

// To overcome this issue always use 'use strict' mode:
'use strict';
(function() {
	for(i=0; i<10; i++) {
    	console.log(i);
	}
})();
console.log('after function',i);
// Gives i is not defined

'use strict';
var i = 99999;
(function() {
	for(var i=0; i<10; i++) {
    	console.log(i);
	}
})();
console.log('after function',i);

// Output
// 1 2 3 4 5 6 7 8 9 after function 99999
// var i = 0 has its own scope inside function
// Variable hoisting:
// 'use strict';
// var i = 99999;
// (function() {
// var i
// 	for(i=0; i<10; i++) {
//     	console.log(i);
// 	}
// })();
// console.log('after function',i); 


'use strict';
var i = 99999;
(function() {
	for(i=0; i<10; i++) {
    	console.log(i);
	}
})();
console.log('after function',i);

// Output
// 1 2 3 4 5 6 7 8 9 after function 10
// i is reassigned inside function
// JS tries to find i inside function first then goes up and finds it outside function

'use strict';
var i = 99999;
(function() {
	for(i=0; i<10; i++) {
    	console.log(i);
	}
 var i;
})();
console.log('after function',i);

// Output
// 1 2 3 4 5 6 7 8 9 after function 99999
// Variable hoisting
// Getting hoisted before getting executed


function showName() {
	console.log(name);
	var name = 'John';
	console.log('new name'+ name);
}
showName();

// Output
// undefined
// new nameJohn
// It is important to note that only variable declaration is hoisted at top and not variable
// initialisation and declaration