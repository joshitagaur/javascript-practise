//Introduction Of JSON
var string = JSON.stringify({name : 'X', born : 1989});
console.log(string)
//->{"name":"X","born":1989}
//parse function in JSON
console.log(JSON.parse(string).born);
//->1989