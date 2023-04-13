const add = document.getElementById('add');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');

var number = 0;

add.addEventListener("click", () => {
    number++;
    currentValue.innerHTML = number;
    currentValue.style.color = currentValueColor(number); 
});

minus.addEventListener("click", () => {
    number--;
    currentValue.innerHTML = number;
    currentValue.style.color = currentValueColor(number);
});

reset.addEventListener("click", () => {
    number = 0;
    currentValue.innerHTML = number;
    currentValue.style.color = currentValueColor(number);
});


function currentValueColor(number) {
    var color = "";
    if (number < 0) {
        color = "red";
    }
    else if (number > 0) {
        color = "green";
    }
    else {
        color = "royalblue";
    }
    
    return color;
}