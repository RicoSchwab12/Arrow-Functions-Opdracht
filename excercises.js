
/*

 Het kan je overkomen dat je code van anderen moet debuggen
 of dat je deze moet herschrijven omdat er een nieuwe versie van de programmeertaal is.

 Corrigeer de voorbeelden 1 tm 4.
 De code is correct zonder foutmeldingen, gebruik de console.

 Map en Filter worden veel gebruikt, lees zelf hoe map, filter en reduce werken.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

 */


// Corrigeer 1.
let add = () => 1 + 1;
console.log("Opdracht 1: ", add());

// Corrigeer 2.
let divide = (num1, num2) => num1 / num2;
console.log("Opdracht 2: ", divide(7, 2));

// Corrigeer 3.
let square = (width, length) => {
    const double = 2;
    width = width * double;
    length = length * double;
    return width * length;
}
 console.log("Opdracht 3: ", square(10, 15));
//
// Corrigeer 4.
let counting = [4, 2, 14].map((x) => {
    const add = x + 1;
    return x * add;
});
console.log("Opdracht 4: ", counting);


/*

 Herschrijf de volgende voorbeelden nu met de Arrow Function Syntax

 */

const numbers = [0, 1 , 3, 4, 7, 13, 22, 31, 36];
const score = [
    {course: 'FrontEnd', grade: 3},
    {course: 'PHP', grade: 7},
    {course: 'Backend', grade: 9},
    {course: 'Java', grade: 4}
];

// Herschrijf 1.
const oneven = numbers.filter((number) => {
    return number % 2;
});
console.log("Opdracht 5: ",oneven);

// Herschrijf 2.
const sum = numbers.reduce((first, second) => {
    return first + second;
});
console.log("Opdracht 6: ",sum);

// Herschrijf 3.
const total = score.reduce((first, second) => {
    return first + second.grade;
}, 0);
console.log("Opdracht 7: ", total);

// Herschrijf 4.
const range = numbers.filter((number) => {
    return number > 5 && number < 30;
});
console.log("Opdracht 8: ",range);

// Herschrijf 5.
const double = numbers.map((number) => {
    return number * 2;
});
console.log("Opdracht 9: ", double);
