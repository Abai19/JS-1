// ES6+ отличия ES5 
// var старый вариант, let const ES6 

function varTest(){
    var x = 1;
    if(true){
        var x=2;
        console.log(x)
    }
    console.log(x)
}
//varTest();
function letTest(){
    let x = 1;
    if(true){
        let x=2;
        console.log(x)
    }
    console.log(x)
}
//letTest();

let books = [
    {
        title: 'X',
        price: 10
    },
    {
        title: 'Y',
        price: 15
    }
]

let titles = books.map(item => item.price)
//console.log(titles);

//ES5 
var titles1 = books.map(function(item){
    return item.title
})
//Map()
let lengths = ['Acer', 'HP', 'MacBook'].map(item=>item.length);
//console.log(lengths)

// Filter()
let brands = ['Acer', 'HP', 'MacBook'].filter(item=> item !=="HP")
//console.log(brands);

// Reduce()

let nums = [1,2,3,4,5].reduce(function(prevVal,currentVal){
    return prevVal+currentVal
})
//console.log(nums);

// Шаблонные литералы(строки)
// `name- ${name}`

let student = "Oleg";
let age = 44;
let profession = "software developer";
//ES 6+
//console.log(`Name- ${student}, age- ${age}, profession- ${profession}`);
//ES 5
//console.log("Name-"+ student + "Age-"+ age+ "profession"+ profession);

let studentObj = {
    name: "Sergey",
    age: 20
}
//console.log(`name- ${studentObj.name}`)

//const array = [1,2,3];
//const array1 = [...array, 4,5];
// console.log(array)
// console.log(array1);

//spread
const obj = {
    mark: "Ford",
    name: "Mustang"
}
const obj1 = {
    ...obj,
    production: '1994 March'
}
// console.log(obj);
// console.log(obj1);

//rest
const array = [1,2,3,4,5,5,6,7,8,10];
const [firstItem, secondItem, ...otherArray] = array;
// console.log(firstItem);
// console.log(secondItem);
// console.log(otherArray);

function foo (item, ...args) {
    console.log(item);
    console.log(args)
}
foo(2, 33,3,1,2,4,5);

// Деструктуризация

//let [x,y] = [1,2]

function doSome(){
    return [1,2]
}
let [x,y] = doSome();

import {showLog , names} from './helper.js';

showLog();
console.log(names);