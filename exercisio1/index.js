let btn = document.querySelector("#button");
let text = document.querySelector("#textbox");
let vowels = document.querySelector("#vowels");
let characters = document.querySelector("#characters");
let upperCase = document.querySelector("#uppercase");
let lowerCase = document.querySelector("#lowercase");

const resetReport = () => {
    vowels.innerText = "";
    characters.innerText = "";
    upperCase.innerText = "";
    lowerCase.innerText = "";
}

const checkVowels = (str) => {
    let num = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        const element = str[i];

        vowels.forEach((leter) => {
            if (leter === element) {
                num++;
            }
        })
    }

    return num;
}

const countCharacters = (str) => {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result ++;
    }
    return result;
}

const countUppercase = (str) => {
    let match = [...str.matchAll(/[A-Z]/g)];
    let result = match.length;
    return result;
}

const countLowercase = (str) => {
    let match = [...str.matchAll(/[a-z]/g)];
    let result = match.length;
    return result;
}

// trim and analyse the string on button click
btn.addEventListener("click", () => {
    resetReport();
    string = text.value.trim();

    vowels.innerText += checkVowels(string);
    characters.innerText += countCharacters(string);
    upperCase.innerText += countUppercase(string);
    lowerCase.innerText += countLowercase(string);
})
