// // Homework 3 instructions
// # Unit 03 JavaScript Homework: Password Generator

// ## Description

// Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.

// The user will be prompted to choose from the following password criteria:

// * Length (must be between 8 and 128 characters)

// * Character type:

//   * Special characters ([see examples](https://www.owasp.org/index.php/Password_special_characters))

//   * Numeric characters

//   * Lowercase characters

//   * Uppercase characters

// The application should validate user input and ensure that at least one character type is selected.

// Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.

// As a bonus, the user should also have the option to click a button to copy the password to their clipboard.

// Your application should have a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

var pass = prompt("Please choose how long long you wish your password to be.  Please choose a whole number between 8 and 128.");
if (pass > 7 & pass < 129) {
  alert("You got it chief!");
  if (confirm("Would you like uppercase letters in your password?") == true) {
    alert("I can do that for you!");
    if (confirm("Would you like lowercase letters in your password?") == true) {
      alert("I can do that for you!");
      if (confirm("Would you like numbers in your password?") == true) {
        alert("I can do that for you!");
        if (confirm("Would you like symbols in your password?") == true) {
          alert("Generating your password!");
        }
        else {
          alert("Not a problem. Generating your password!");
          console.log (pass)
        }
      }
      else {
        alert("Not a problem");
        if (confirm("Would you like symbols in your password?") == true) {
          alert("Generating your password!");
        }
        else {
          alert("Not a problem. Generating your password!");
        }

      }
    }
    else {
      alert("Not a problem.")
      if (confirm("Would you like numbers in your password?") == true) {
        alert("I can do that for you!");
        if (confirm("Would you like symbols in your password?") == true) {
          alert("Generating your password!");
        }
        else {
          alert("Not a problem. Generating your password!");
        }
      }
      else {
        alert("Not a problem");
        if (confirm("Would you like symbols in your password?") == true) {
          alert("Generating your password!");
        }
        else {
          alert("Not a problem. Generating your password!");
        }

      }

    }
  }
  else {
    alert("Not a problem");
    if (confirm("Would you like lowercase letters in your password?") == true) {
      alert("I can do that for you!");
      if (confirm("Would you like numbers in your password?") == true) {
        alert("I can do that for you!");
        if (confirm("Would you like symbols in your password?") == true) {
          alert("Generating your password!");
        }
        else {
          alert("Not a problem. Generating your password!");
        }
      }
      else {
        alert("Not a problem");
        if (confirm("Would you like symbols in your password?") == true) {
          alert("Generating your password!");
        }
        else {
          alert("Not a problem. Generating your password!");
        }

      }
    }
    else {
      alert("Not a problem.")
      if (confirm("Would you like numbers in your password?") == true) {
        alert("I can do that for you!");
        if (confirm("Would you like symbols in your password?") == true) {
          alert("Generating your password!");
        }
        else {
          alert("Not a problem. Generating your password!");
        }
      }
      else {
        alert("Not a problem");
        if (confirm("Would you like symbols in your password?") == true) {
          alert("Generating your password!");
        }
        else {
          alert("Not a problem. Generating your password!");
        }

      }

    }
  }
}


else {
  alert("Not a valid password length");
}

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

