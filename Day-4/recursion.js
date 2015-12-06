function power(base,exponent)
{
     if(exponent == 0)
       return 1;
     else
       return base * power(base,exponent - 1)
}
      console.log(power(2,3))
      console.log(power(4,0))
VM459:9 8
VM459:10 1