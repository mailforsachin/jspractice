// var can be reinitialized so dont use it
// Constant is written in all caps

let myFirstname = "Sachin"

let myLastname = function returnsLastname()
{
    return(" Tewari")
}
console.log(myFirstname+myLastname())

function myName(myFirstname,myLastname)

{
    let myFullname = `My fullname is ${myFirstname}${myLastname}`
    myObject =
    {
        "firstname": myFirstname,
        "lastname": myLastname
    }
    return myFullname;
}
console.log(myName("Sachin", "Tewari"));
console.log(myObject.firstname);
console.log(myObject.lastname)