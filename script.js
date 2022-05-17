// Assignment code here
var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['"', '!', '#', '$', '%', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '`', '^', '_', '{', '|', '}', '~'];

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

generatePwd();
