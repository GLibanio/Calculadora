let buttons = document.querySelectorAll("button");
let res = document.querySelector("h6");

buttons.forEach(function(button) {
    button.onclick = function(){
        res.innerHTML = button.innerHTML;
    }
});