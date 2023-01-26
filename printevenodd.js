const oddEven =(myNumber) => (myNumber%2==0)?"Even":"Odd";
for(let myNumber=0;myNumber<=100;myNumber++)
{
    //    document.write(myNumber+ "    " + oddEven(myNumber) + "<br>")
    document.write(`${myNumber} ${myNumber % 2 ? 'Odd' : 'Even'}<br>`)
}

// for(let myNumber = 0; myNumber <= 100; myNumber++) {
//     document.write(`${myNumber} ${myNumber % 2 ? 'Odd' : 'Even'}<br>`);
//   }