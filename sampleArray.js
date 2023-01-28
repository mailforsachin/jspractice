const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// MAP
// Get an array of all names
//var allNames = characters.map((characters)=>{return characters.name});  //Also Works
var allNames = characters.map((characters) => characters.name);
document.write(allNames);

// Get an array of all heights
//var allHeight =characters.map((characters)=>{return characters.height}); //Also works
var allHeight = characters.map((characters) => characters.height);
document.write("<br>");
document.write(allHeight);

// Get an array of objects with just name and height properties
//var allNameAndHeight =characters.map((characters)=>{return `[${characters.height}, ${characters.name}]`}); //Also works
var charactersNamesHeight = characters.map(character => ({name: character.name, height: character.height}));
console.log(charactersNamesHeight);

console.log(charactersNamesHeight.length)
let printArr;
for (printArr=0;printArr<charactersNamesHeight.length;printArr++)

{
    
    console.log(`The fullname is ${charactersNamesHeight[printArr].name}`)
    let firstName=charactersNamesHeight[printArr].name.split(" ");
    console.log(`The firstname is ${firstName[0]}`);
    document.write("<br>")

}

// Get an array of all first names

// var charactersNamesHeight = characters.map(character => ({name: character.name, height: character.height}));
// document.write("<br>");




// Get an array of all first names
// REDUCE
// Get the total mass of all characters
// Get the total height of all characters
// Get the total number of characters in all the character names
// Get the total number of characters by eye color (hint. a map of eye color to count)
// FILTER
// Get characters with mass greater than 100
// Get characters with height less than 200
// Get all male characters
// Get all female characters
// SORT
// Sort by name
// Sort by mass
// Sort by height
// Sort by gender
// EVERY
// Does every character have blue eyes?
// Does every character have mass more than 40?
// Is every character shorter than 200?
// Is every character male?
// SOME
// Is there at least one male character?
// Is there at least one character with blue eyes?
// Is there at least one character taller than 200?
// Is there at least one character that has mass less than 50?