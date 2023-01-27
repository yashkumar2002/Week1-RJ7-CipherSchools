// Map

// let array = [1, 2, 3, 4, 5];
// let newArray = [];

// for(let i = 0; i < array.length; i++) {
//     newArray[i] = array[i] * array[i];
// }

// console.log(newArray);


// let array = [5, 10, 15, 20];

// function functionforMap(element) {
//     return element * element;
// }

// let newArray = array.map(functionforMap);
// console.log(newArray);

// let array = [5, 10, 15, 20];

// //let functionforMap(element) => element * element;


// let newArray = array.map((element, index)=> {
// return  element * element
// });
// console.log(newArray);

// For Each

// let array = [1, 2, 3, 4, 5];
// array.forEach((element, index)=>{
//     // console.log(element)
//     element *= element;
//     console.log(element);
// }) ;

// console.log("Array is: ", array);

//Filter

// let array = [10, 20, 30, 40, 50]
// let newArray = array.filter((element)=> element >= 30);
  
// array.filter((element)=> {
//    return  element >= 30;

// let array = [10, 20, 30, 40, 50]
// let temp = array.find((value)=>{
//     //let temp = array.findIndex
//     return value > 20;
// });

// console.log(temp);

// sorting
// let array = [50, 40, 30, 20, 10];
// let sortedArray = array.sort();
// console.log(sortedArray)

// let array = [50, 40,111, 30, 20, 10];
// let sortedArray = array.sort((el1, el2)=>{
//     el1 = Number(el1);
//     el2 = Number(el2);
//     return el1 - el2;
// });
// console.log(sortedArray);

//object destructuring

// let details = {
//     name: "Alex",
//     age: 24,
//     address: {
//         strret: "brooklyn",
//         city: "NewYork",
//         state: "NY",
//         country: "USA",
//         passportDetails: {
//             passprtNumber: "ABCD01234",
//         },
//     },
// };

// let passprtNumber= details.address.passportDetails.passprtNumber;
// console.log(passprtNumber);

// //let myName = details.name;
// //let age = details.age;
// let {name: myName, age}= details;
// console.log(myName, age);

//Array Matching

// Object Matching


// let obj1 = {name: "sahil"};
// let obj2 = {name: "sahil"};

// function areEqual(obj1, obj2) {
//     if(obj1 == obj2) {
//         return true;
//     }
//     if(Object.keys(obj1).length !=Object.keys(obj2).length) {
//         return false;
//     }

//     for(let key of Object.keys(ob1)){
//         if(type obj2[key]== "undefined") {
//             return false;
//         }
//         if(obj2[key] !== obj1[key])
//         return false;
//     }
// }
// return true;
    
// }
// console.log(araEqual);

//Map and set

// let map = new Map();
//     map.set(1, "sahil");
//     map.set(2, "Alex");
//     console.log(map);
    
let set = new Set();
set.add(1);
set.add(-1);
let arr = [...set];
console.log(set);

// class

class Animal {
    noOfLegs;
    color;
    family;
    sound;

    constructor(noOfLegs, color, family, sound) {
this.noOfLegs = noOfLegs;
this.color = color;
this.family = family;
this.sound = sound;
    }
    showAnimal() {
        console.log("The animal belongs to family " + this.family);
    }
}

let animal = new Animal(4, "brown", "rodent", "phew phew");
console.log(animal);
animal.showAnimal();