"use strict";
const numbers = [];
let userInput = 0;
let ttl = 0;

{
}
do {
  userInput = Number(prompt("insert the number", ""));
  numbers.push(userInput);

  {
  }
} while (userInput !== 0);
numbers.pop(userInput);
console.log("Inputed array is: " + numbers);
{
}
for (let i of numbers) {
  ttl += i;
}

{
}
if (numbers.length >= 1) {
  alert(`sum of all numbers ${ttl}`);
} else {
  userInput;
}

console.log(`sum of all numbers ${ttl}`);
console.log(typeof userInput);
