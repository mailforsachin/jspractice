function myClosure(myFirstNum)
{
  
    return mySecondNum => mySecondNum+myFirstNum;
    
}
let enterFirstNum;
const call2ndNumber=myClosure(100);
// console.log(myClosure(10))
console.log(call2ndNumber(10));
