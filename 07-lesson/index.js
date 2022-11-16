// Создание объекта с помощью функции-конструктор
// function Human(firstName,lastName){
//     this.firstName = firstName
//     this.lastName = lastName
// }

// const chris = new Human('Chris','Brown');
// const alex = new Human('Alex', 'Green');
// console.log(chris);
// console.log(chris.firstName);
// console.log(chris.lastName);
// console.log(alex);


// Создание объекта с помощью классов 
// class Human {
//     constructor(firstName, lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }

// const oleg = new Human("oleg","petrov");
// console.log(oleg);
// console.log(oleg.firstName);
// console.log(oleg.lastName);

//Создание объекта с помощью связки 
// const Human = {
//     init(firstName,lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }

// const chris = Object.create(Human);
// chris.init("Chris", "Brown");
// console.log(chris);
// console.log(chris.firstName);
// console.log(chris.lastName);

// Фабричные функции
// function Human (firstName, lastName){
//     return {
//         firstName,
//         lastName
//     }
// }

// const chris = Human('Chris', 'Brown');
// console.log(chris);
// console.log(chris.firstName);
// console.log(chris.lastName);
 

// Методы 
//1 вариант, обьяление метода внутри конструктора
class Animal {
    constructor(type,age){
        this.type = type
        this.age = age
        this.checkName = function(){
            alert(`Hello ${type} , age- ${age}`)
        }
    }
}
// const tiger = new Animal('tiger', '10');
// console.log(tiger.type);
// tiger.checkName();

//2 вариант, объявление метода вне конструктора
class Student {
    constructor(name,course){
        this.name= name
        this.course = course
    }
    getInfo() {
        return `Имя студента - ${this.name} , Курс -  ${this.course}`
    }
}

const nurbek = new Student('nurbek', '3');
//console.log(nurbek.getInfo());


class Bill {
    constructor (amount,guests,quality){
        this.amount = amount
        this.guests= guests
        this.quality = quality
    }
    calculate () {
        return (this.amount * this.quality)/this.guests
    }
}
const yesterdayBill = new Bill(400,5,0.15);
const sundayBill = new Bill (700,8, 0.2);
const mondayBill = new Bill(950,4, 0.25);

let yesterdayTable = yesterdayBill.calculate();
let  sundayTable = sundayBill.calculate();
let mondayTable = mondayBill.calculate();
console.log(yesterdayTable + sundayTable+ mondayTable);

//Передали недостаточно параметров, ошибка!!!
// const example = new Bill (300,22);
// console.log(example.calculate())








