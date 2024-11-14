const numbers = [3, 7, 2, 9, 5];
let maxNumber = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}

console.log(maxNumber);
