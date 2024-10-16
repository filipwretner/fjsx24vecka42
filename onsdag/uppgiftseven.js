let x = '10';
let y = 10;

console.log(x == y);
console.log(x === y);

console.log(`== blir ${x == y} eftersom man inte jämför datatyper konverteras värdet på x, de blir därför lika`);
console.log(`=== blir ${x === y} eftersom man jämför datatyper och då konverteras inte x, jämför då en string med ett number och det blir false`);
