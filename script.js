// Dom Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

// clipboard function
clipboard.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if (!password) { return; }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard');
});

// Event listeners
generate.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

//password generator function
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

  // Doesn't have a selected type
  if (typesCount === 0) {
    return '';
  }

  // create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}


// functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

var length = Number(prompt("How many characters will your password be? Please enter a number between 8 and 128"));
//ask for character type
var charType = prompt("Please enter any combination of the following character types in any order with or without all of them: lowercase, uppercase, numeric, or special.  examples include: 'lowercase, special' or 'special, uppercase, numeric, lowercase.' or 'numeric, uppercase, lowercase'");
//generate password
function generatePassword() {
  //evaluate character type
  var charSet = "";
  var charTypeLower = charType.toLowerCase();
  if( charTypeLower === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeLower === "uppercase" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "numeric" ) {
    charSet = "0123456789";
  } else if( charTypeLower === "special" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "lowercase, uppercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "lowercase, numeric" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz0123456789";
  } else if( charTypeLower === "lowercase, special" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  } else if( charTypeLower === "uppercase, lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "uppercase, numeric" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if( charTypeLower === "uppercase, special" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  } else if( charTypeLower === "numeric, lowercase" ) {
    charSet = "0123456789abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeLower === "numeric, uppercase" ) {
    charSet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "numeric, special" ) {
    charSet = "0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
  } else if( charTypeLower === "special, lowercase" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeLower === "special, uppercase" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "special, numeric" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";

  } else if( charTypeLower === "lowercase, uppercase, numeric" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; 
  } else if( charTypeLower === "lowercase, uppercase, special" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 
  } else if( charTypeLower === "lowercase, numeric, uppercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "lowercase, numeric, special" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "lowercase, special, uppercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "lowercase, special, numeric" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";

  } else if( charTypeLower === "uppercase, lowercase, numeric" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if( charTypeLower === "uppercase, lowercase, special" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "uppercase, numeric, lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if( charTypeLower === "uppercase, numeric, special" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if( charTypeLower === "uppercase, special, lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "uppercase, special, numeric" ) {
    charSet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  } else if( charTypeLower === "numeric, lowercase, uppercase" ) {
    charSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "numeric, lowercase, special" ) {
    charSet = "0123456789abcdefghijklmnopqrstuvwxyz !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "numeric, uppercase, lowercase" ) {
    charSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "numeric, uppercase, special" ) {
    charSet = "0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "numeric, special, lowercase" ) {
    charSet = "0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeLower === "numeric, special, uppercase" ) {
    charSet = "0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  } else if( charTypeLower === "special, lowercase, uppercase" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "special, lowercase, numeric" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~abcdefghijklmnopqrstuvwxyz0123456789";
  } else if( charTypeLower === "special, uppercase, lowercase" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "special, uppercase, numeric" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "special, numeric, lowercase" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeLower === "special, numeric, uppercase" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  } else if( charTypeLower === "lowercase, uppercase, numeric, special" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "lowercase, uppercase, special, numeric" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "lowercase, numeric, uppercase, special" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "lowercase, numeric, special, uppercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "lowercase, special, uppercase, numeric" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "lowercase, special, numeric, uppercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  } else if( charTypeLower === "uppercase, lowercase, numeric, special" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "uppercase, lowercase, special, numeric" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "uppercase, numeric, lowercase, special" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "uppercase, numeric, special, lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "uppercase, special, lowercase, numeric" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "uppercase, special, numeric, lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  } else if( charTypeLower === "numeric, lowercase, uppercase, special" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "numeric, lowercase, special, uppercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "numeric, uppercase, lowercase, special" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "numeric, uppercase, special, lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "numeric, special, lowercase, uppercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "numeric, special, uppercase, lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  } else if( charTypeLower === "special, lowercase, uppercase, numeric" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "special, lowercase, numeric, uppercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "special, uppercase, lowercase, numeric" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "special, uppercase, numeric, lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "special, numeric, lowercase, uppercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if( charTypeLower === "special, numeric, uppercase, lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  //return value
  var retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}
alert(generatePassword());