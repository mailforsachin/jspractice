
let myDrink ="coffee";
let WhattoDrink;
console.log(WhattoDrink=myDrink="coffee"?5:15)
console.log(isString(myDrink))
console.log(isString(WhattoDrink))

function isString(input) {
    return typeof input === 'string' || input instanceof String;
}
