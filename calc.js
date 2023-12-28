const numbers = document.querySelectorAll('.numbers > button');
const operators = document.querySelectorAll('.normalOps > button');
const equals = document.querySelector('.equals');
// const clear_op = document.querySelectorAll('.toprow');
const AC = document.querySelector('#AC');
const DEL = document.querySelector('#DEL');

const topRow = document.querySelector('.top_row');
const bottomRow = document.querySelector('.bottom_row');

// 3 variables for wach part of an operation
let num1='',num2='',operator='';
let displayBig,displaySmall;
let N_num1,N_num2; //from string to actual number to calcolate

topRow.textContent='';

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
function divide(num1,num2){
    return num1/num2;
}

//create function to takes operator and 2 numbs then calls an operator funfction
function operate(num1,num2,operator){
    let result;
    let N_num1 = parseFloat(num1);
    let N_num2 = parseFloat(num2);
    if (operator=='+'){
        result= add(N_num1,N_num2);
    }
    if (operator=='-'){
        result= subtract(N_num1,N_num2);

    }
    if (operator=='x'){
        result= multiply(N_num1,N_num2);

    }
    if (operator=='/'){
        result= divide(N_num1,N_num2);

    } 
    if (result.toString().includes('.')){
        result =result.toFixed(4);
    }
    return result;
}

function validNum(num){
    return (num.length>0 && num!='.');
}

function updateTop(){
    topRow.textContent = num1 +  operator + num2;
}
function updateBottom(){
    bottomRow.textContent = num1 + operator + num2;
}

//buttons that changes displat clock
numbers.forEach((num)=>{
    num.addEventListener('click',()=>{
        let numStr = num.textContent;
        //make sure its enough space
        if (topRow.textContent.length<13){
            // check if num1 or num2
            if (!operator){ //num1
                //max 1 deci
                if (!(numStr=='.' && num1.includes('.') )){
                    num1+=numStr;
                }
            }
            else{ //num2
                //max 1 deci      
                if (!(numStr==='.' && num2.includes('.'))){
                    num2+=numStr;
                }
            }
            //update top row,
            updateTop();
       
        }
        else{
            alert('Too many digits. DEL some.')
            console.log('too long')
        }
    })
})


operators.forEach((operant)=>{
    operant.addEventListener('click',()=>{
        if (validNum(num1)){
            if (!operator){ //just num1
                operator = operant.textContent;
            }
            else { //there is an operator
                if (validNum(num2)){ // there is also num2
                    updateBottom();
                    //calculate;
                    //change result to num1
                    // change operator to operant.textContent;
                    let result = operate(num1,num2,operator);
                    num1 = result.toString();
                    num2 = '';
                    operator = operant.textContent;
                    updateTop();
    
                } 
            } 
            updateTop();
            
        }
        else {
            console.log('invalid num1')
        }
    })
})

equals.addEventListener('click',()=>{
    if (validNum(num1) && validNum(num2)){
        let result =  operate(num1,num2,operator);
        num1 = result.toString()
        num2 = '';
        operator = '';
        updateTop();
        bottomRow.textContent='';
    }
})

AC.addEventListener('click',()=>{
    num1='';
    num2='';
    operator ='';
    topRow.textContent ='';
    bottomRow.textContent = '';
})

function del(num){
    return num.substring(0,num.length-1)
}
DEL.addEventListener('click',()=>{
    if (num2){
        num2=del(num2);
    }
    else if (operator){
        operator = '';
    }
    else if (num1){
        num1 = del(num1);
    }
    updateTop();
    
})


function buttonEffect(name){
    name.addEventListener('mouseover',(event)=>{
        event.target.style.cssText = 'background-color:#d5d4d3;font-size:40px;color:#575652;'
    })
    name.addEventListener('mouseout',(e)=>{
        event.target.style.cssText = 'backgroud-color:white;font-size:30px;'
    })
}
//hover effects
numbers.forEach((num)=>{
    buttonEffect(num);
})

operators.forEach((num)=>{
    buttonEffect(num);
})

buttonEffect(equals);
buttonEffect(DEL);
buttonEffect(AC);

