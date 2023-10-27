let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateSquareRoot() {
    display.value = Math.sqrt(eval(display.value));
}

function calculatePower() {
    display.value = Math.pow(eval(display.value), 2);
}

function calculateLogarithm() {
    display.value = Math.log10(eval(display.value));
}
