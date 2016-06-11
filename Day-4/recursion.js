//find the power of a number using recursion
function power(base,exponent)
{
     if(exponent == 0)
       return 1;
     else
       return base * power(base,exponent - 1)
}
console.log(power(2,3))
console.log(power(4,0))
//->8
//->1

function factorial(num)
{
	if(num == 0)
		return 1;
	else
		return num * factorial(num-1);
}
console.log(factorial(5)); //-> 120