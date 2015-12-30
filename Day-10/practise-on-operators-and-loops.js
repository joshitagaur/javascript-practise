//program for numbers divisible by 3 and 5 and both
var i = 1
for(i; i<=25; i++)
{
    if(i%3 == 0 && i%5 != 0)
    {
       console.log("fizz")
    }
    else if(i%5 == 0 && i%3 != 0)
    {
       console.log("buzz")
    }
    else if(i%5 == 0 && i%3 == 0)
    {
       console.log("fizzbuzz")
    }
}
//->fizz
//->buzz
//->fizz buzz
//->fizz
//->fizzbuzz
//->fizz
//->buzz
//->fizz
//->buzz
