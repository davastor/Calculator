let oneBtn = document.getElementById("1");
let twoBtn = document.getElementById("2");
let threeBtn = document.getElementById("3");
let fourBtn = document.getElementById("4");
let fiveBtn = document.getElementById("5");
let sixBtn = document.getElementById("6");
let sevenBtn = document.getElementById("7"); 
let eightBtn = document.getElementById("8");
let nineBtn = document.getElementById("9");
let zeroBtn = document.getElementById("0");
let addBtn = document.getElementById("add");
let subBtn = document.getElementById("sub");
let divBtn = document.getElementById("div");
let multBtn = document.getElementById("mult");
let equalBtn = document.getElementById("equal");
let decBtn = document.getElementById("dec");
let textLine = document.getElementById("text-line");
let clearBtn = document.getElementById("clear");
let x;
let y;
let result;
let operator;
let operatorExists = false;


oneBtn.addEventListener('click', () => {updateTextLine('1');});
twoBtn.addEventListener('click', () => {updateTextLine('2');});
threeBtn.addEventListener('click', () => {updateTextLine('3');});
fourBtn.addEventListener('click', () => {updateTextLine('4');});
fiveBtn.addEventListener('click', () => {updateTextLine('5');});
sixBtn.addEventListener('click', () => {updateTextLine('6');});
sevenBtn.addEventListener('click', () => {updateTextLine('7');});
eightBtn.addEventListener('click', () => {updateTextLine('8');});
nineBtn.addEventListener('click', () => {updateTextLine('9');});
zeroBtn.addEventListener('click', () => {updateTextLine('0');});
addBtn.addEventListener('click', () => {checkOperator('add');});
subBtn.addEventListener('click', () => {checkOperator('sub');});
divBtn.addEventListener('click', () => {checkOperator('div');});
multBtn.addEventListener('click', () => {checkOperator('mult');});
equalBtn.addEventListener('click', () => {evaluateExpression(operator);});
decBtn.addEventListener('click', () => {
    if(!textLine.textContent.includes('.')){
        updateTextLine('.');
    }
});
clearBtn.addEventListener('click', () => {updateTextLine('clear');});

//checks if there is already an operator 
//(can't have multiple operations simultaneously)
//evaluates expression if there is already an operator (identical to pressing '=')
//if there isn't, stores first half of textLine ( first operand) into x
//if operator DOES exist in textLine, set Y (second operand), and evaluate expression
function checkOperator(op){
    if(operatorExists){
        setY();
        evaluateExpression(operator);
        return;
    }

    x = textLine.textContent;  
    operator = op;
    operatorExists = true; 

    if(operator === 'add'){
        updateTextLine('+');
    }
    else if(operator === 'sub'){
        updateTextLine('-');
    }
    else if(operator === 'div'){
        updateTextLine('÷');
    }
    else{
        updateTextLine('x');
    }
}

function setY(){
    let searchValue;
    
    if(operator === 'add'){
        searchValue = '+';
    }
    else if(operator === 'sub'){
        searchValue = '-';
    }
    else if(operator === 'div'){
        searchValue = '÷';
    }
    else{
        searchValue = 'x';

    }
    let index = textLine.textContent.indexOf(searchValue);
    y = textLine.textContent.slice(index+1);
}

//run whenever '=' is pressed
function evaluateExpression(operator){
    if(operatorExists){
        setY();
    }

    if(operator === 'add'){
        addNums();
    }
    else if(operator === 'sub'){
        subNums();
    }
    else if(operator === 'div'){
        divNums();
    }
    else{
        console.log(x);
        console.log(y);
        multNums();
    }

    updateTextLine('=');
    operatorExists = false;
}

function addNums(){
    result = Number(x) + Number(y);
    x = result;
}


function subNums(){
    result = Number(x) - Number(y);
    x = result;
}

function divNums(){
    result = Number(x) / Number(y);
    x = result;
}

function multNums(){
    result = Number(x) * Number(y);
    x = result;
}

function updateTextLine(input){
    if(input === 'clear'){
        textLine.textContent = '';
        operatorExists = false; 
        operator = '';
        x = 0;
        y = 0;
    }
    else if(input === '='){
        textLine.textContent = result;
    }
    else{
        textLine.textContent += input;
    }
}