// Find factorial
const findFactorial=n => {return((n==0)?1:findFactorial(n-1)*n)};
document.write(findFactorial(5));
document.write("<br>")
// Find sum
const findSum=n => {return((n==0)?0:findSum(n-1)+n)};
document.write(findSum(25));
