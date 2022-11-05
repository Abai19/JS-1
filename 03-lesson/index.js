// Дом. работа  задача 2

// let array = [2,19,33,3,15,33,12,3,5,68,8,99]
// let newArray = [];
// for(let i =0; i<array.length; i++){
//     if(array[i]>10){
//         newArray.push(array[i])
//     }
// }
// console.log(newArray);

// function declaration (Обьявление функции)

// function showMessage () {
//     //тело функции
//     console.log('message showed!')
// }
// // Вызов функции
// showMessage();

// локальная переменная message
// function showMessage(){
//     let message = "Hello, how's doing?"
//     alert(message)
// }
// showMessage();
// alert(message); // ошибка

// глобальная переменная message
// let message = "Hello, how's doing?";
// function showMessage(){
//     message= "Im okay";
//     alert(message);
// }
// alert(message);
// showMessage();

// function showName (text, name){
//     console.log(text + " " + name)
// }

// showName('Hello', 'Sasha');
// showName(); //undefined

// function plusNums (a,b){
//     console.log(a+b)
// }
// plusNums(1,6);



// параметры по умолчанию
// function showName (text, name){
//     if(name=== undefined){
//         name='name by default'
//     }
//     console.log(text + " " + name)
// }
// //showName('Hello', 'Sasha');
// showName('Hey'); 

// function sumTwoVar (a,b) {
//     return a+b
// }
// console.log(sumTwoVar(9, 12));

// let dateStart= '19.01.2022T19:30:03';
// console.log(dateStart);
// function removeT (date){
//     return date.replace('T', ' ')
// }
// console.log(removeT(dateStart));

//function expression
//showName(); ошибка, пытаемся вызвать до её инициализации
// let showName = function () {
//     console.log('HEllo world');
// }
// showName();
// // function declaration
// showAlert();
// function showAlert(){
//     alert('hey')
// }

// стрелочные функции, более короткий вариант записи function expression
console.log(sum(1,4))
let sum = (a,b) => a+b;
let sum1= function(a,b){ //одна и та же функция
    return a+b
}
console.log(sum(12,5));