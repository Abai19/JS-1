// Логический оператор ИЛИ ||
// let num = 3;
 
// if(num ==3  || num ==4){
//     alert('yes!')
// }
// else {
//     alert('no!')
// }

// let str = "string";
// if((str =="string" || str =="boolean") && str =="object"){
//     alert('yes!')
// }
// else {
//     alert('no!')
// }

// if( num ==2 && num ==3){
//     ...
// }

// Неравно !== 
// let num = 3;
// if(num !==4){
//     alert('yes');
// }

// Отрицание или противоположное дейтвие 

// let isAdmin = false;
// if(!isAdmin) {
//     alert('Yes admin')
// }
// else {
//     alert(' No, user')
// }

//Switch case 

// let str = "string";

// switch(str) {
//     case "boolean":
//         console.log(' Yes, boolean');
//         break;
//     case "number":
//         console.log('Yes, number');
//         break;
//     case "undefined":
//         console.log('Yes, undefined')
//         break ;
//     case "string":
//         console.log('Yes, string')
//         break;
//     default:
//         console.log('Not match!')
// }


//Массивы 

let array = ["ReactJs", "AngularJS", "VueJs", "NodeJS"];
        //      0            1          2         3

let arr = [1, false, "name", [], {}]
// console.log(array[1]);
// console.log(arr[4]);

// Замена значения под индексом 0
//array[0] = "RxJs";
// console.log(array);

// Добавление значения на индекс 4
array[4]= "TreeJs";

//length - длина массива
//console.log(array.length);

// push добавляет элемент в конец
let names = ['Sergey', 'Andrey', 'Kolya'];
names.push('Adilet');
// console.log(names);

// удаляет последний элемент
// names.pop();
// console.log(names);

// shift удаляет первый элемент
names.shift();

// unshift добавляет элемент вначало
names.unshift('Azamat');
//console.log(names);
 

// Обьекты 

let car = {
    id: 25,
    mark: "Toyota",
    model: "Camry 55 SE",
    color: "Black",
    volume: 2.5,
    owners: [
        {
            name: 'Aidos',
            age: 18,
            yearStart: 2021,
            yearEnd: 2022
        },
        {
            name: "Arsen",
            age: 15,
            yearStart: 2018,
            yearEnd: 2021
        },
        {
            name: 'Aibek',
            age:30,
            yearStart: 2015,
            yearEnd: 2018
        }
    ],
    serialNumber : 123902932,
    owner: {
        name: "Sanjar",
        age: 22,
        passportNumber: 8282822
    }
}
// console.log(car.mark +" " +  car.model);
// console.log(car.owners[1].name)
// console.log(car.owner.passportNumber)


let num = 5;
num++;
//console.log(num);
// Циклы 

// for (let i =1 ; i<=10; i++){
//    console.log(i)
// }


// let arr2 = [6,35,633,2,515,22,55];
// for (let i =0; i< arr2.length; i++){
//     console.log(arr[i])
// }


// let arr3= ['my', 'name ', 'is', 'Abai']
// for( let elem of arr3){
//     console.log(elem)
// }

for ( let i = 0; i<car.owners.length; i++){
    console.log(car.owners[i].name)
}