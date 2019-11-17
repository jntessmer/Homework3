// Variables
var resultEl = document.getElementById('result');
var lengthEl = document.getElementById('length');
var upperCaseEl = document.getElementById('upperCase');
var lowerCaseEl = document.getElementById('lowerCase');
var numberEl = document.getElementById('number');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');
var clipboardEl = document.getElementById('clipboard');

let randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Generate event listener
generateEl.addEventListener('click', function() {
    let length = + lengthEl.value;
    let hasLower = lowerCaseEl.checked;
    let hasUpper = upperCaseEl.checked;
    let hasNumber = numberEl.checked;
    let hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower,hasUpper,hasNumber,hasSymbol, length);
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    // 1. Password variable
    // 2. Filter out unchecked
    // 3. Loop over length -> call generator function for each type
    // 4. add final password to the variable and return

    let generatePassword = '';

    var typesCount = lower + upper + number + symbol;

    let typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = object.keys(type)[0];

            generatePassword += randomRunc[funcName]();
        });
    }
    let finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

// Generator functions - http://www.net-comber.com/charset.html
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower());