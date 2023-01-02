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
let x = undefined;
let y = undefined;
let result;
let operator;
let operatorExists;
let prevOperationExists;
let prevY;



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
equalBtn.addEventListener('click', () => { evaluateExpression();});
decBtn.addEventListener('click', () => {
    if(!textLine.textContent.includes('.')){
        updateTextLine('.');
    }
});
clearBtn.addEventListener('click', () => {updateTextLine('clear');});



//checks if there is already an operator 
//(can't have multiple operations simultaneously)
//evaluates expression if there is already an operator (identical to pressing '=')
//stores first half of textLine (first operand) into x
//if operator DOES exist in textLine, set Y (second operand), and evaluate expression
function checkOperator(op){

    if(!operatorExists && textLine.textContent.length !== 0){
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
    else if(x === undefined || y === undefined){ 

        return;

    }
    else{
        evaluateExpression();
    }

}

function setXandY(){
    
    let searchValue;
    let index;
    
    if(operator === 'add'){
        searchValue = '+';
    }
    else if(operator === 'div'){
        searchValue = '÷';
    }
    else{
        searchValue = 'x';
    }

    if(operator === 'sub'){
        searchValue = '-';
        if(y !== undefined || x < 0){
            let firstPos = textLine.textContent.indexOf(searchValue);
            console.log(firstPos);
            index = textLine.textContent.indexOf(searchValue, firstPos+1);
            console.log(index);
        }
        else{
            index = textLine.textContent.indexOf(searchValue);
        }


    }
    else{
        index = textLine.textContent.indexOf(searchValue);
    }



    if(index != -1){
        x = textLine.textContent.slice(0, index);
        y = textLine.textContent.slice(index+1);
    }
    else{
        x = result;
        y = undefined;
    }

}

//run whenever '=' is pressed
function evaluateExpression(){
 
   
    setXandY();
    if(textLine.textContent.length === 0 || y === undefined){
        return;
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
    if (Number(y) === 0){
        result = 'Cannot divide by zero.';
    }
    else{
        result = Number(x) / Number(y);
        x = result;
    }

}

function multNums(){
    result = Number(x) * Number(y);
    x = result;
}

function updateTextLine(input){
    if(input === 'clear'){
        textLine.textContent = '';
        operator = '';
        operatorExists = false;
        x = undefined;
        y = undefined;
        result = undefined;
    }
    else if(input === '='){
        textLine.textContent = result;
    }
    else{
        textLine.textContent += input;
    }
}