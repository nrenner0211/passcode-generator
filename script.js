// Assignment Code here

const passwordRange = document.getElementById('passwordRange')
const passwordLengthNumber = document.getElementById('passwordLengthNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const uppercaseChar = arrayFromLowToHigh(65, 90)
const lowercaseChar = arrayFromLowToHigh(97, 122)
const numberChar = arrayFromLowToHigh(48, 57)
const symbolChar = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh (58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

passwordLengthNumber.addEventListener('input', syncCharacterAmount)
passwordRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = passwordLengthNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeLowercase = includeLowercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
  passwordDisplay.textarea = password
})

function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
  let charCodes = lowercaseChar
  console.log(symbolChar)
  if (includeUppercase) charCodes = charCodes.concat (uppercaseChar)
  if (includeLowercase) charCodes = charCodes.concat (lowercaseChar)
  if (includeNumbers) charCodes = charCodes.concat (numberChar)
  if (includeSymbols) charCodes = charCodes.concat (symbolChar)

  const passwordCharacters = []
  for (let i = 0; i < characterAmount, i++;) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  passwordLengthNumber.value = value
  passwordRange.value = value
}



















// var length = document.querySelector('#length').checked;
// var lowercase = document.querySelector('#lowercase').checked;
// var uppercase = document.querySelector('#uppercase').checked;
// var number = document.querySelector('#number').checked;
// var character = document.querySelector('#character').checked;

// // Password Parameters
// var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// var specialChar = ['"', '!', '#', '$', '%', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '`', '^', '_', '{', '|', '}', '~'];

// var generatePassword = function(){
//   // select password length
//   var passwordLength = window.prompt("How many characters would you like your password to have? (8-128 characters)");
//     passwordLength = parseInt(passwordLength);

//     if (passwordLength >= 128 || passwordLength <= 8){

//     }
// }

//   // // select password length
//   // var passwordLength = window.prompt("How many characters would you like your password to have? (8-128 characters)");
//   //   passwordLength = parseInt(passwordLength);

//   //   if (passwordLength < 8) {
//   //     alert("Password must have more than 7 characters!");
//   //     return "";
//   //   }

//   //   if (passwordLength > 128) {
//   //     alert("Password is too long!");
//   //     return "";
//   //   }

//   //   else {
//   //     alert("Not a valid option. Try again!");
//   //     return "";
//   //   }

//   var lowercaseCharChoice = confirm("Would you like some lowercase characters?");
//   if (lowercaseCharChoice) {
//   userPassword += lowercaseChar;
// }
// var uppercaseCharChoice = confirm("How about uppercase characters?");

//   if (uppercaseCharChoice) {
//   userPassword += uppercaseChar;
// }

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// generatePwd();
