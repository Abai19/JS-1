// var, let, const 
//var --- let

// создание переменных -- правила
// let 1name= "error";
// let name-surname= "error";
// let return = "error";
// let * = "error";

// camelCase || snake_case

let nameStudent = "Arsen";
let name_student = "Argen";

// Типы данных 
// number - числовой
// string - строка
// boolean - логический 
// undefined - неопределенный тип
// null - пустой 
// NaN - not a number 
// bigint - длинные числа 
// object - объектный 
// symbol - уникальный 

//NaN
// let num = 5;
// let str = 'afaf'
// console.log(num*str)


// alert, prompt, confirm --Встроенные функции JS 

// Операторы 
// +,-,*,/
// =
// ==, ===
// ! 
// !==
// += , -= , *=, /=  
// > , < , >=, <= 
// && , || 

// == - нестрогое равенство 
// ===  - строгое равенство 
// и также условные операторы
// let num = 5;
// let str = "5"

// if(num == str){
//     alert('TRUE')
// }
// else {
//     alert('FALSE')
// }

// if(num === str){
//     alert('TRUE')
// }
// else {
//     alert('FALSE')
// }


// Массивы - структура данных, для хранения упорядоченных значений
let arr = [1,3,4,5,6,7];
let array = new Array();


arr[0]

// push() 
// pop()
// shift()
// unshirt()

// Иттерация массива 

// map()
// filter()
// reduce()
// find()

// Обьекты 
let student = {
    name : "Alex"
}
console.log(student.name)
console.log(student["name"])

// Циклы for, while 

// for ( let i=1 ; i<=20; i++){
//     console.log(i)
// }

// let i = 1;
// while(i<=30){
//     console.log(i)
//     i++
// }

// if ( con1 > 0 && con2 < 10){
//     //code
// }
// map()
let arr2 = [
    {
        name: "Alex",
        age: 19
    },
    {
        name: "Oleg",
        age: 23
    },
    {
        name: "Stepan",
        age: 30
    },
]
console.log(arr2.map(item=> item.name) )
let nums = [2,3,4,5,6].map(item=> item*2)
console.log(nums)

// filter ()
let names = ['Alex', 'Oleg', 'Stepan', 'Antonio']

console.log(names.filter(name=> name.length>5))
 
// reduce()
let nums1 = [1,2,3,1,1,1,5]
console.log(nums1.reduce((prev, curr)=> prev+curr))

// find() -- находит самое первое совпадение
let nums3 = [4,5,562,55,35,6]
console.log(nums3.find(item=> item>30))



// function declaration, function expression 

// showAlert() 
// function showAlert(){
//     alert('hello')
// }

//showName()  // ошибка
let showName = function (name='oleg'){
    alert(name)
}
//showName()

//showAlert()

// ООП


class Sum {
    constructor(firstVar,secondVar){
        this.findSum = function (){
            return firstVar+  secondVar 
        }
    }
}
const findS = new Sum(4,5)
console.log(findS.findSum())


function showName2 (name, age){
    alert(`Hello ${name}, your age is - ${age}`)
}

//showName2('Aibek', 30)


// шаблонные строки 
// ES6+ 
 
let student2 = "Nurbek";
console.log(student2+ " "+ " is good student") // es5

console.log(`${student2}  is good student`); // es6+
