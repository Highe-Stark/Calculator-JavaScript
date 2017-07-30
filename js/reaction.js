/**
 * Created by Higher Stark on 2017/7/17.
 */

let inputBox = document.getElementById("inputbox");

function input_char(ch){
    /*let input box = document.getElementById("inputBox");*/
    inputBox.value += ch;
    console.log(inputBox.value);
}

function input_changed(){
    //console.log("Input box is changed");
    let s = inputBox.value;
    console.log(s);
}

inputBox.addEventListener("input", input_changed);

let plusButton = document.getElementById("plus");
let distractButton = document.getElementById("distract");
let multipleButton = document.getElementById("multiple");
let divideButton = document.getElementById("divide");
let modButton = document.getElementById("mod");
let leftpare_Button = document.getElementById("left-pare");
let rightpare_Button = document.getElementById("right-pare");
let absButton = document.getElementById("abs");
let powButton = document.getElementById("pow");
let sqrtButton = document.getElementById("sqrt");
let button0 = document.getElementById("zero");
let button1 = document.getElementById("one");
let button2 = document.getElementById("two");
let button3 = document.getElementById("three");
let button4 = document.getElementById("four");
let button5 = document.getElementById("five");
let button6 = document.getElementById("six");
let button7 = document.getElementById("seven");
let button8 = document.getElementById("eight");
let button9 = document.getElementById("nine");
let button_point = document.getElementById("point");
let bsp = document.getElementById("backspace");
let ac = document.getElementById("ac");
let res = document.getElementById("result");
let memory = document.getElementById("memory");
let remember = document.getElementById("remember");

plusButton.addEventListener("click", function(){
    input_char("+");
});
distractButton.addEventListener("click", function(){
    input_char("-");
});
multipleButton.addEventListener("click", function(){
    input_char("*");
});
divideButton.addEventListener("click", function(){
    input_char("/");
});
modButton.addEventListener("click", function(){
    input_char("%");
});
leftpare_Button.addEventListener("click", function(){
    input_char("(");
});
rightpare_Button.addEventListener("click", function(){
    input_char(")");
});
absButton.addEventListener("click", function(){
    input_char("| |");
});
powButton.addEventListener("click", function(){
    input_char("^");
});
sqrtButton.addEventListener("click", function(){
    input_char("sqrt()");
});
button0.addEventListener("click", function(){
    input_char("0");
});
button1.addEventListener("click", function(){
    input_char("1");
});
button2.addEventListener("click", function(){
    input_char("2");
});
button3.addEventListener("click", function(){
    input_char("3");
});
button4.addEventListener("click", function(){
    input_char("4");
});
button5.addEventListener("click", function(){
    input_char("5");
});
button6.addEventListener("click", function(){
    input_char("6");
});
button7.addEventListener("click", function(){
    input_char("7");
});
button8.addEventListener("click", function(){
    input_char("8");
});
button9.addEventListener("click", function(){
    input_char("9");
});
button_point.addEventListener("click", function(){
    input_char(".");
});
memory.addEventListener("click", function() {
    input_char("M");
})
remember.addEventListener("click",function()
{
    input_char("R");
})
bsp.addEventListener("click", function(){
    let s = inputBox.value;
    inputBox.value = s.substring(0, s.length - 1);
});
ac.addEventListener("click", function(){
    inputBox.value = "";
});
res.addEventListener("click", function(){
    let s = inputBox.value;
    let ts = tokenStream.construct();
    let res = 0;
    try {
        ts.build(s);
        res = expression(ts);
    }
    catch (error){
        res = error;
    }
    if (res === null) res = 0;
    let output = document.getElementById("outputbox");
    if (typeof (res) === "string"){
        output.setAttribute("width", "300px");
    }
    if (ts.rem){
        M = res;
    }
    output.setAttribute("value", res);
    //output.value = res;
});