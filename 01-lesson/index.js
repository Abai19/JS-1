//alert("Hello world!");

// var userName = "anonym";
// userName = "Petr";
// console.log(userName);
// let password = "some password";
// console.log(password);
// const email = "email@gmail.com";
// email = "uueuee";
// console.log(email);


// camelCase  
//let userName =  "user" 

// snake_case
//let user_name = " new name"

// правила создания перменных (неправильное)

// let 1hello = 'hey';
// let user-name = '';
// let return = 'hey';
// let #username= '';

//Типы данных
// number - числовой
// string - тектовый
// boolean - логический

//let counter = 1;
// counter = "hey";
// console.log(counter);

let someId = 4;
// console.log( someId + 10);
// console.log( someId - 2);
// console.log( someId * 10);
// console.log( someId / 2);
// console.log( someId ** 2);
// console.log( someId % 3);

// someId = someId+ 1;
// someId +=1;
// someId -=1;
// someId *=2;
// someId /=2;
// console.log(someId)

//string 

//let userName = "admin";
let password = "admin123";
// конкатенация 

// let result = "Name: "+ userName + " " + "Password:"+ password;
// console.log(result);

// boolean
let isAdmin = true;
let isGreen = false;
console.log(isAdmin);
console.log(isGreen);

// undefined 

let userName;
console.log(userName);

//NaN
// let str = "string";
// let num = 3;
// console.log( str * num);

// alert, confirm , prompt

//alert('Hello world');

// let result  = confirm('Как настроение?');
// console.log(result);

// let result = prompt('Тебе нравится JS?','ДАААА' );
// console.log(result);


// Условные конструкции

// =  - присвоение
// ==  - сравнение (нестрогое)
// === - сравнение (строгое)

// let personalId = 28;

// if (personalId== 29) {
//         alert('Успешный вход!')
// }
// else {
//     alert('Доступ запрещен!')
// }

// let num = 3;
// let str = "3"
// if (num === str){
//     alert('TRUE')
// }

//Операторы сравнения
// == , ===, != , !==(не равно) , > , < , >= , <=, !(отрицание)

//Логические операторы 
//  && и 
//  || или
let personalId = prompt('Ваш персональный ID');

if(personalId >18 && personalId< 29) {
    alert('Petr')
}
else if (personalId >29 && personalId < 49){
    alert("Anton")
}
else if(personalId>49 && personalId< 60){
    alert( "user")
}
else {
    alert('Доступ запрещен!')
}
