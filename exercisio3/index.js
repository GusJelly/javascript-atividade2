let screen_text = document.querySelector("#number");

// Button variables
const clear = document.querySelector("#clear");
const plus_or_minus = document.querySelector("#plus_or_minus");
const percentage = document.querySelector("#percetange");
const divide = document.querySelector("#divide");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const multiply = document.querySelector("#multiply");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const minus = document.querySelector("#minus");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const plus = document.querySelector("#plus");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");

// This function clears the initial zero on the screen_text
function check_for_zero() {
    if (screen_text.innerText == "0")
        screen_text.innerText = "";
}

// Event handlers -> NUMBERS
clear.addEventListener("click", () => {
    check_for_zero();
    screen_text.innerText = "0";
});
zero.addEventListener("click", () => {
    check_for_zero();
    screen_text.innerText += "0";
});
one.addEventListener("click", () => {
    check_for_zero();
    screen_text.innerText += "1";
});
two.addEventListener("click", () => {
    check_for_zero();
    screen_text.innerText += "2";
});
three.addEventListener("click", () => {
    check_for_zero();
    screen_text.innerText += "3";
});
four.addEventListener("click", () => {
    check_for_zero();
    screen_text.innerText += "4";
});
five.addEventListener("click", () => {
    check_for_zero();
    screen_text.innerText += "5";
});
six.addEventListener("click", () => {
    check_for_zero();
    screen_text.innerText += "6";
});
seven.addEventListener("click", () => {
    check_for_zero();
    screen_text.innerText += "7";
});
eight.addEventListener("click", () => {
    check_for_zero();
    screen_text.innerText += "8";
});
nine.addEventListener("click", () => {
    check_for_zero();
    screen_text.innerText += "9";
});

// Event handlers -> OPERATORS
plus.addEventListener("click", () => {
    check_for_zero();
    screen_text.innerText += "+";
});
minus.addEventListener("click", () => {
    check_for_zero();
    screen_text.innerText += "-";
});
divide.addEventListener("click", () => {
    check_for_zero();
    screen_text.innerText += "/";
});
multiply.addEventListener("click", () => {
    check_for_zero();
    screen_text.innerText += "*";
});
decimal.addEventListener("click", () => {
    screen_text.innerText += ".";
});

equals.addEventListener("click", () => {
    screen_text.innerText = math.evaluate(screen_text.innerText);
});

