const numbers = [3, -1, 2, -7];
const positiveNumbers = [];
const negativeNumbers = [];

numbers.forEach((number) => {
    if(number >= 0){
        positiveNumbers.push(number);
    } else {
        negativeNumbers.push(number);
    }
})

console.log("Nombres positifs : ", positiveNumbers);
console.log("Nombres negatifs : ", negativeNumbers);