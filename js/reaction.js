/**
 * Created by Higher Stark on 2017/7/17.
 */

function inputchar(ch){
    var inputbox = document.getElementById("inputbox");
    inputbox.setAttribute("value", inputbox.getAttribute("value")+ch);
    console.log(inputbox.getAttribute("value"));
}

function inputchanged(){
    console.log("Input box is changed");
    let s = inputbox.text.valueOf();
    console.log(s);
    inputbox.setAttribute("value", s);
}

var inputbox = document.getElementById("inputbox");
inputbox.addEventListener("input", inputchanged);

var plusButton = document.getElementById("plus");
var distractButton = document.getElementById("distract");
var multipleButton = document.getElementById("multiple");
var divideButton = document.getElementById("divide");
var modButton = document.getElementById("mod");

plusButton.addEventListener("click", function(){
    inputchar("+");
});
distractButton.addEventListener("click", function(){
    inputchar("-");
});
multipleButton.addEventListener("click", function(){
    inputchar("*");
});
divideButton.addEventListener("click", function(){
    inputchar("/");
});
modButton.addEventListener("click", function(){
    inputchar("%");
});