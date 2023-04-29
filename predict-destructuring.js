const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output - the first log will output the first car 'Tesla', the second will output 'Mercedes'
console.log(randomCar)
console.log(otherRandomCar)

const employee = {
  name: 'Elon',
  age: 47,
  company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output - name isn't defined so it should output an error and stop running
console.log(name);
console.log(otherName);

const person = {
  name: 'Phil Smith',
  age: 47,
  height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output - password logs as '12345' and hashedPassword is never defined so logs undefined
console.log(password);
console.log(hashedPassword);

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output - log1 will return false, and log2 will return true since 2!=5, but 2==2
console.log(first == second);
console.log(first == third);

const lastTest = {
  key: 'value',
  secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output - log1: 'value' // log2: [1,4,1,8,3,3] // log3: 1 // log4: 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);