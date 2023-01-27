// var myName = "john";
// console.log(myName);

// const myName = [];
// console.log(myName);
// myName.push("john");
// console.log(myName);

//const myName = 5;  error

// int i = 0;
// int i = 5;  error

// let myName = "john"
// console.log(myName)
// myName = "Alex";
// myName = 5;
// console.log(myName);

// var myName = "john"
// console.log(myName)
// myName = "Alex";

// function addTwoNumbers(num1, num2) {
//     var num = 5;
//     return num1 + num2;
// }
// console.log(num);
// {
//     var num = 5;
// }
// console.log(num);


// String Interpolation

// let firstName = "Sahil";
// let lastName = "Choudhary";
// //console.log(firstName + " " + lastName);

// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }
// console.log(addTwoNumbers(1, 2));

// let addTwoNumbers = (num1, num2)=> {
//     return num1 + num2;
// }
// console.log(addTwoNumbers(1, 2));

// let addTwoNumbers = (num1, mum2) => num1 + num2;
// console.log(addTwoNumbers(1,2));

// let addTwoNumbers = (num1, num2)=> {
//          console.log(num1);
//          console.log(num2);
//          return num1 + num2;
// };
// console.log(addTwoNumbers(1, 2));

// let addTwoNumbers = (num1, num2= 5)=> {
//              console.log(num1);
//              console.log(num2);
//              return num1 + num2;
//     };
//     console.log(addTwoNumbers(1));

// Rest and spread operator

let array = [5, 10, 15, 20, 25];
//let newArray = [...array, 30, 35, 40];
console.log(...array);
// Rest operator

// let testFunction = (...args)=> {
//     console.log(args);
// }

// let maxOfTwoNumbers = (num1, num2) => Math.max(num1, num2);
// let maxOfThreeNumbers = (num1, num2, num3) => Math.max(num1, num2, num3);
// let maxOfNumbers = (...numbers) => {
//    // console.log(numbers);
//    let maximum = Number.MIN_VALUE;
//    for(let number of numbers) {
//     maximum = Math.max(maximum, number);
//    }
//    return maximum;
// };

// console.log(maxOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

let object = {
    name: "john",
    age: 24,
    address: {
        city: "NewYork",
        state: "NY",
        country: "USA",
    }
};

// let object2 = {...object, country: "Usa", favouriteSong: "ABCD"};
// let object2 = {...object};
let object2 = JSON.parse(JSON.stringify(object));
object2.address.city= "New York";
console.log(object2);