var i = 999;
for(let i=0; i<10; i++) {
	console.log(i);
}
console.log('after loop',i);

// 1 2 3 4 5 6 7 8 9 after loop 10
// let introduces block level scope

const x = 5
x = 6
console,log(x);

// Assignment to constant variable

const x = {
	y: 5
}
x.y = 6
console.log(x);

// y:6

// Const helps minimise mutable state