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
addBtn.addEventListener('click', () => {updateTextLine('+');});
subBtn.addEventListener('click', () => {updateTextLine('-');});
divBtn.addEventListener('click', () => {updateTextLine('÷');});
multBtn.addEventListener('click', () => {updateTextLine('x');});
equalBtn.addEventListener('click', () => {updateTextLine('=');});
decBtn.addEventListener('click', () => {updateTextLine('.');});
clearBtn.addEventListener('click', () => {updateTextLine('clear');});



function updateTextLine(input){
    textLine.style.padding = "10px;";
    textLine.style.borderRadius = "5px";
    textLine.style.width = "350px";
    textLine.style.w
    if(input === 'clear'){
        textLine.textContent = '';
    }
    else{
        textLine.textContent += input;
    }

}