
var numberOfButtons = document.querySelectorAll(".calcButtons");
var display = document.querySelector(".display-screen");
var expression = [];

for(var i = 0; i < numberOfButtons.length; i++){ // number of buttons that are clickable
    numberOfButtons[i].addEventListener("click", function(){ // adds click events on buttons
        var returnValue = this.getAttribute("value");
        expression.push(returnValue);
        display.setAttribute("value", expression.join(''));
        if(returnValue == "="){
            display.setAttribute("value", eval(display.getAttribute("value").slice(0, display.getAttribute("value").length - 1)));
        }
    });
}