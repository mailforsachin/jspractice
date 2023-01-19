// ==========================
// Print first 2 letters

//Primitive Data Types
    // String, NUmber, Boolean, undefined, null, BigInt, Symbol 

// let firstName="Sachin";
// let firstNameLen=firstName.length;
// //console.log(firstNameLen)

// for (let charName in firstName)
// {
//     //console.log(`The ${charName} character is ${firstName[charName]}`)
//     //console.log(firstName[firstNameLen]);
// }
// =========================================
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
// ==============================

// Write a JavaScript functidon to check 
// whether an `input` is a string or not.
var myString = prompt("Enter anything: ");
var typeofMystring=typeof myString;
console.log(typeofMystring)
if (typeofMystring === "string")
{
    console.log("It is a string!")
    console.log(typeofMystring.toUpperCase(typeofMystring))
    console.log(myString.replace("s","b"));
    console.log(myString.slice(0,4))
    console.log(myString.substring(1,3,myString))
}
else console.log("It is not a string")


