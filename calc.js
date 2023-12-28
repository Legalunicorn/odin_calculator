const numbers = document.querySelectorAll('.numbers > button');
const operators = document.querySelectorAll('.operants > button');
// const clear_op = document.querySelectorAll('.toprow');
const AC = document.querySelector('#AC');
const DEL = document.querySelector('#DEL');

const topRow = document.querySelector('.top_row');
const bottomRow = document.querySelector('.bottom_row');

// 3 variables for wach part of an operation
let num1,num2;
let operator;
let displayBig,displaySmall;

topRow.textContent=''

//base functions
function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function dibide(num1,num2){
    return num1/num2;
}

//create function to takes operator and 2 numbs then calls an operator funfction
function operate(num1,num2,operator){
    return operator(num1,num2);
}

//buttons that changes displat clock
numbers.forEach((num)=>{
    num.addEventListener('click',()=>{
        if (topRow.textContent.length<12){
            topRow.textContent+=num.textContent;
        }
        else{
            console.log('too long')
            console.log(topRow.textContent.length)
        }
    })
})
operators.forEach((operant)=>{
    
})

AC.addEventListener('click',()=>{
    topRow.textContent ='';
    bottomRow.textContent = '';
})


