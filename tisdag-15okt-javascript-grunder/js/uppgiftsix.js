let x = "5";
let y = 3;

console.log("x + y = ", x + y); // Lägger till y som en sträng
console.log("Number(x) + y = ", Number(x) + y); // Nu när båda räknas som number så genomförs en matematisk operation
console.log("x * y = ", x * y); // * / - har inga andra funktioner så därför behövs inte x konverteras till number
console.log("x / y = ", x / y);
console.log("x - y = ", x - y);
console.log("x + y + y = ", x + y + y); // Gör x + y först, detta blir då en string vilket sedan tas + 3 likt första
console.log("x + (y + y) = ", x + (y + y)); // I och med att vi har två number inom parantesen genomförs additionen och läggs sedan på strängen