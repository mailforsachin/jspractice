// ############################### FIRST ########################

// Normal functions
function sumNormal(a,b)
{
    return (a+b);

}
var mySumNormal = sumNormal(10,15);
console.log(`My normal function sum is ${mySumNormal}`)

// Arrow functions for double parameter functions
// Arrow functions --- 1
let sumArrow1 = (a,b)=>{  //Adding let, removing fn name adding arrow
    return (a+b);
}

// Arrow functions --- 2
let sumArrow2 = (a,b)=> a+b;

var mySumArrow1 = sumArrow1(10,15);
var mySumArrow2 = sumArrow2(10,15);
console.log(`My arrow function 1 sum is ${mySumArrow1}`);
console.log(`My arrow function 2 sum is ${mySumArrow2}`);
// ############################### SECOND ########################

// Normal function
var myNumberCheck=isPositive(10);

function isPositive(myNumber)
{
    return myNumber >=0;
}
console.log(myNumberCheck)

// Arrow function for single parameter functions

let isPositiveArrow = myNumber => myNumber >=0;
console.log(isPositiveArrow(-1))

// ############################### THIRD ########################
// Zero parameter functions

function randomGen(){
    return Math.random()
}
var myRandomNumber = randomGen()
console.log(myRandomNumber)


let myArrowRandomNumber = () => Math.random();
console.log(myArrowRandomNumber())

// ############################### FOURTH ########################