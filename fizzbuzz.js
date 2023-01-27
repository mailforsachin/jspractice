// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
// number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for
// numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
// for numbers divisible by only one of those).
// (This is actually an interview question that has been claimed to weed out
// a significant percentage of programmer candidates. So if you solved it, your
// labor market value just went up.)


// A number is divisble by 3 if sum of the digits is divisible by 3

// We have to pass numbers to function that sums the inputs see the return statement 
// or use a logical operation

// A number is divisible by 5 if last digit is zero or 5 
// Convert to string pop in array see array last Element


// fixed code
const divByFive = myNumber => {
    var myArr = ("" + myNumber).split("").map(Number);
    var checkMyNum = myArr[myArr.length - 1];
    if (Number(checkMyNum) == 0 || Number(checkMyNum) == 5) {
        return document.write("Divisible by 5");
    } else {
        return document.write("Not Divisible by 5");
    }
};

const divbyThree = myNumber1 => {
    var myArr1 = ("" + myNumber1).split("").map(Number);
    var summationTotal = 0;
    for (i = 0; i < myArr1.length; i++) {
        // document.write("helo")
        document.write("<br>");
        // document.write(`Number is ${Number(myArr[i])}`)
        summationTotal = Number(myArr1[i]) + summationTotal;
    }
    //document.write(`Summation is ${summationTotal}`);

    return (summationTotal % 3 == 0) ? "Divisible by 3" : "Not Divisible by 3";
};

for (let s = 1; s <= 100; s++) {
    document.write(`Sample number :: ${s}`);
    var my3 = divbyThree(s);
    document.write(my3);
    document.write("<br>");
    var my5 = divByFive(s);
    document.write("<br>");
    if (my3 == "Divisible by 3" && my5 == "Divisible by 5") {
        document.write("FizzBuzz");
        document.write("<br>");
    } else if (my3 == "Divisible by 3" && my5 != "Divisible by 5") {
        document.write("Fizz");
        document.write("<br>");
    } else if (my3 != "Divisible by 3" && my5 == "Divisible by 5") {
        document.write("Buzz");
        document.write("<br>");
    }
    document.write("<br>");
}