let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log (ages[ages.length - 1] - ages[0]);

ages.push(50);
console.log(ages[ages.length - 1] - ages[0]);

let totalAge = 0;
for(let i = 0; i <ages.length; i++){
    totalAge += ages[i];
}
let averageAge = totalAge / ages.length;
console.log(averageAge);

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log(averageLetters);

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

let totalNameLength = 0;
for (let i = 0; i < nameLengths.length; i++) {
    totalNameLength += nameLengths[i];
}
console.log(totalNameLength);

function repeatWord(word, n) {
    let repeatedWord = '';
    for (let i = 0; i < n; i++) {
        repeatedWord += word;
    }
    return repeatedWord;
}
console.log(repeatWord('Hello', 3));

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName('John', 'Doe'));

function isSumGreaterThan100(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total > 100;
}
console.log(isSumGreaterThan100([10, 20, 30, 40, 50]));

function average(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total / numbers.length;
}
console.log(average([10, 20, 30, 40, 50]));

function isFirstAverageGreater(arr1, arr2) {
    let avg1 = average(arr1);
    let avg2 = average(arr2);
    return avg1 > avg2;
}

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 11));

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(17)); // Should return true
console.log(isPrime(18)); // Should return false