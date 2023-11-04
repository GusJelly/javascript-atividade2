// Main file
// author: Gustavo Meireles

const screenCalc = document.querySelector('#number') as HTMLParagraphElement;

// Button variables
const clear = document.querySelector("#clear") as HTMLDivElement;
const plus_or_minus = document.querySelector("#plus_or_minus") as HTMLDivElement;
const percentage = document.querySelector("#percetange") as HTMLDivElement;
const divide = document.querySelector("#divide") as HTMLDivElement;
const one = document.querySelector("#one") as HTMLDivElement;
const two = document.querySelector("#two") as HTMLDivElement;
const three = document.querySelector("#three") as HTMLDivElement;
const multiply = document.querySelector("#multiply") as HTMLDivElement;
const four = document.querySelector("#four") as HTMLDivElement;
const five = document.querySelector("#five") as HTMLDivElement;
const six = document.querySelector("#six") as HTMLDivElement;
const minus = document.querySelector("#minus") as HTMLDivElement;
const seven = document.querySelector("#seven") as HTMLDivElement;
const eight = document.querySelector("#eight") as HTMLDivElement;
const nine = document.querySelector("#nine") as HTMLDivElement;
const plus = document.querySelector("#plus") as HTMLDivElement;
const zero = document.querySelector("#zero") as HTMLDivElement;
const decimal = document.querySelector("#decimal") as HTMLDivElement;
const equals = document.querySelector("#equals") as HTMLDivElement;

// This function clears the initial zero on the screenCalc
function check_for_zero() {
    if (screenCalc.innerText === "0") {
        screenCalc.innerText = "";
    }
}

// Event handlers -> NUMBERS
clear.addEventListener("click", () => {
    check_for_zero();
    screenCalc.innerText = "0";
});
zero.addEventListener("click", () => {
    check_for_zero();
    screenCalc.innerText += "0";
});
one.addEventListener("click", () => {
    check_for_zero();
    screenCalc.innerText += "1";
});
two.addEventListener("click", () => {
    check_for_zero();
    screenCalc.innerText += "2";
});
three.addEventListener("click", () => {
    check_for_zero();
    screenCalc.innerText += "3";
});
four.addEventListener("click", () => {
    check_for_zero();
    screenCalc.innerText += "4";
});
five.addEventListener("click", () => {
    check_for_zero();
    screenCalc.innerText += "5";
});
six.addEventListener("click", () => {
    check_for_zero();
    screenCalc.innerText += "6";
});
seven.addEventListener("click", () => {
    check_for_zero();
    screenCalc.innerText += "7";
});
eight.addEventListener("click", () => {
    check_for_zero();
    screenCalc.innerText += "8";
});
nine.addEventListener("click", () => {
    check_for_zero();
    screenCalc.innerText += "9";
});

// Event handlers -> OPERATORS
plus.addEventListener("click", () => {
    check_for_zero();
    screenCalc.innerText += "+";
});
minus.addEventListener("click", () => {
    check_for_zero();
    screenCalc.innerText += "-";
});
divide.addEventListener("click", () => {
    check_for_zero();
    screenCalc.innerText += "/";
});
multiply.addEventListener("click", () => {
    check_for_zero();
    screenCalc.innerText += "*";
});
decimal.addEventListener("click", () => {
    screenCalc.innerText += ".";
});
