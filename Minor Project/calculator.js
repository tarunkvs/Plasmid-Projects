let firstnumber='';
let result='';
let operator='';
let currentinput='';
const display=document.getElementById('display');
const buttons=document.querySelectorAll('.newbutton');
buttons.forEach(button =>{
    button.addEventListener('click',() => {
        const value=button.value;
if(value==='AC'){
    firstnumber='';
    currentinput='';
    operator='';
    result='';
    display.innerText='0';
}
else if(value==='DEL'){
    currentinput=currentinput.slice(0,-1);
    display.innerText=currentinput || '0';
}
else if(['+','-','*','%','/','**'].includes(value)){
    if(currentinput==='') return;
   firstnumber=currentinput;
   operator=value;
   currentinput='';
}
else if(value==='='){
const num1=parseFloat(firstnumber);
const num2=parseFloat(currentinput);
if(!isNaN(num1) && !isNaN(num2)){
    if(operator==='+') result=num1+num2;
    else if(operator==='-') result=num1-num2;
    else if(operator==='*') result=num1*num2;
    else if(operator==='%') result=num1%num2;
    else if(operator==='/') result=num1/num2;
    else if(operator==='**') result=num1**num2;
    display.innerText=result;
    currentinput=result.toString();
    operator='';
    firstnumber='';
}
}
else{
    currentinput+=value;
    display.innerText=currentinput;
}
    });
});