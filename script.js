// Assignment code here
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "U+0022, !#$%&'()*+,-./:;<=>?@[]\^_`{|}~";

function generatePassword() {
  var password = "";
  var userPassword = "";

  // select password length
  var passwordLength = prompt("How many characters would you like your password to have? (8-128 characters)");
  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8) {
    alert("Password must have more than 7 characters!");
    return "";
  }

  if (passwordLength > 128) {
    alert("Password is too long!");
    return "";
  }

  else {
    alert("Not a valid option. Try again!");
    return "";
  }
}

// lowercaseChar yes/no
var lowercaseCharChoice = confirm("Would you like some lowercase characters?");

if (lowercaseCharChoice) {
  userPassword += lowercaseChar;
}

// uppercaseChar yes/no
var uppercaseCharChoice = confirm("How about uppercase characters?");

if (uppercaseCharChoice) {
  userPassword += uppercaseChar;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
