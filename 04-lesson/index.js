// let btnId = document.getElementById('sendBtn');
// //console.log(btnId)

// let btnClass = document.getElementsByClassName('sendBtnClass')
// //console.log(btnClass);

// let btnTag = document.getElementsByTagName('button')
// //console.log(btnTag)

// let btnQueryId = document.querySelector('#sendBtn');
// let btnQueryClass = document.querySelector('.sendBtnClass');
// let btnQueryTag = document.querySelector('button');
// //console.log(btnQueryTag);

// let btns = document.querySelectorAll('button');
// let btnsQueryAll = document.querySelectorAll('.sendBtnClass')
// //console.log(btnsQueryAll)


//События 
// Навешивание обработчика через html атрибуты (неактуально)
function sendInfo () {
    console.log("Info sended")
}

//Добавление свойства обработчика событий к переменной 
function acceptInfo(){
    console.log('Info accepted')
}
let btn = document.querySelector('.sendBtnClassNew')
btn.onclick= acceptInfo;

//addEventListener()
function showAlert() {
    alert('addEventExample was clicked!')
}

let btnEvent = document.querySelector('#addEventExample')
btnEvent.addEventListener('click', showAlert)


let solveBtn = document.querySelector('#calcBtn');
function plusNums (){
    let firstIn = document.querySelector('#firstIn').value;
    let secondIn = document.querySelector('#secondIn').value;
    let result= document.querySelector('.textResult');
    result.textContent= Number(firstIn) + Number(secondIn);
}
solveBtn.addEventListener('click', plusNums)

// #222222, #ABCD31
// rgb (0,0,0) 0-256
// 24.12413151
// 24
let blocks = document.querySelectorAll('.block');
function randomColor () {
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);
    let color = "rgb("+ x +','+ y+','+z+")";
    return color
}
function changeColor(event){
    let color= randomColor();
    event.target.style.backgroundColor = color

}
blocks.forEach(function(block){
    block.addEventListener('click', changeColor)
})
