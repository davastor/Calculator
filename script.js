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
addBtn.addEventListener('click', () => { 
    checkOperator('add');
    if(!operatorExists){
        operator = 'add';
        operatorExists = true; 
        updateTextLine('+');
    }
});
subBtn.addEventListener('click', () => {updateTextLine('-');});
divBtn.addEventListener('click', () => {updateTextLine('÷');});
multBtn.addEventListener('click', () => {updateTextLine('x');});
equalBtn.addEventListener('click', () => {evaluateExpression(operator);});
decBtn.addEventListener('click', () => {updateTextLine('.');});
clearBtn.addEventListener('click', () => {updateTextLine('clear');});

//checks if there is already an operator 
//(can't have multiple operations simultaneously)
//evaluates expression if there is already an operator (identical to pressing '=')
//if there isn't, stores first half of textLine ( first operand) into x
function checkOperator(operator){
    if(operatorExists){
        evaluateExpression(operator);
    }
    else{
        x = textLine.textContent;  
    }
}

//run whenever '=' is pressed
function evaluateExpression(operator){
    

    if(operator === 'add'){

        let index = textLine.textContent.indexOf('+');
        y = textLine.textContent.slice(index+1);
        addNums();
        updateTextLine('=');
    }
}

function addNums(){
    result = Number(x) + Number(y);
}

function updateTextLine(input){

    if(input === 'clear'){
        textLine.textContent = '';
    }
    else if(input === '='){
        textLine.textContent = result;
    }
    else{
        textLine.textContent += input;
    }

}