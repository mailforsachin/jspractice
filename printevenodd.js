const oddEven =(myNumber) => (myNumber%2==0)?"Even":"Odd";

// function oddEven(myNumber)

// {
//     return (myNumber%2==0)?"Even":"Odd";
// }

for(let myNumber=0;myNumber<=100;myNumber++)
{
    // let myResult=oddEven(myNumber)
    // document.write(myNumber+ "    " + myResult + "<br>")
    document.write(myNumber+ "    " + oddEven(myNumber) + "<br>")
}