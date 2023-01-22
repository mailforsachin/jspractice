

let myVar= 1234;
console.log(typeof myVar)
console.log(BigInt(myVar))
//Cannot add big int to normal int

//Double = or Triple ==> (Data type and value)
//Not = vs !==  ==> Data type and Value


//Falsy values =false,null, "",undefined and 0
//Truthy except the above



//==========================
// Print first 2 letters

// Primitive Data Types
//     String, NUmber, Boolean, undefined, null, BigInt, Symbol 

let firstName="Sachin";
let firstNameLen=firstName.length;
//console.log(firstNameLen)

for (let charName in firstName)
{
     //Template String is ` ${}
            console.log(`The ${charName} character is ${firstName[charName]}`)
         //console.log(firstName[firstNameLen]);
}
//=========================================
// replace
// Slice
// substring
// substr
// convert string to array
// split
// convertcase
//     to lowercase
//     to uppercase
// concatenate
// find substring position
//     indexOf
//     lastIndexOf
//     search
//==============================

// Write a JavaScript functidon to check 
// whether an `input` is a string or not.
var myString = prompt("Enter anything: ");
    var myString = "Sachin Tewari";
    var typeofMystring=typeof myString;
    console.log(typeofMystring)
    if (typeofMystring === "string")
    {
        console.log("It is a string!")
        console.log(typeofMystring.toUpperCase(typeofMystring))
        console.log(myString.replace("s","b"));
        console.log(myString.slice(0,4))
        console.log(myString.substring(1,3,myString))
        // String typeconversion from
        // string to number
        console.log(typeof(+myString));
        // Number to String
        console.log(typeof(String(+myString)))
        
    }
    else console.log("It is not a string");

    // 1. How do I combine two strings in JavaScript?
    // 2. How do I check if a string contains a substring in JavaScript?
    // 3. How do I find the length of a string in JavaScript?
    // 4. How do I convert a string to lowercase or uppercase in JavaScript?
    // 5. How do I split a string into an array in JavaScript?
    // 6. How do I remove whitespace from a string in JavaScript?
    // 7. How do I replace a substring in a string in JavaScript?
    // 8. How do I find the index of a substring in a string in JavaScript?
    // 9. How do I trim a string in JavaScript?
    // 10. How do I reverse a string in JavaScript?

    var myString1 = "java"
    var myString2 =" script"

    // substring is all exclusive bounds
  

        console.log(`Stringlength of ${myString1.concat(myString2.trim())} 
        is ${(myString1+myString2).length}, does myString1 contain Jav, yes ${myString1} 
        contains ${myString1.substring(0,3)} `);

        // i have a string "abcdefg". I want to put iterate over each character and put this to an array myarray in javascript

        var myString="This has to go into array"
        var myArray = [];

        for (let char=0;char<myString.length;char++)
        {
            myArray.push(myString.split("")[char])
        }
        console.log(myArray);



 // convert a number to string;
 let myString31 = 0;
 console.log(typeof (myString31 +""))

 // convert a string to number
 let myString41 = "0";
 console.log(typeof (+myString41))

//  Add numbers
 let myStringx1="5",myStringx2="4";
 console.log(typeof myStringx1);
 console.log(+myStringx2 + +myStringx1);