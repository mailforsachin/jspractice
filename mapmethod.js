
document.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
document.write("<br>");
const myArray  = [1,2,3,4];
var opsOnMap = myArray.map(doSomethingFunction=(number,index)=> {return (number*15)});
document.write(`Multiplication of (${myArray}) at (${index}) by 15 is (${opsOnMap})`);
document.write("<br>");
document.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

document.write("<br>");
const myArray1  = [1,2,3,4];
const doSomethingFunction1=number => {return (number*15)};
var opsOnMap1 = myArray.map(doSomethingFunction1);
document.write(`Multiplication of (${myArray1}) by 15 is (${opsOnMap1})`);
document.write("<br>");
document.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");





