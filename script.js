// Assignment code here
var passwordContent = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "1234567890",
  specialCharacters: "~!@#$%^&*()_+=-[]}{:;<>?/"
};

function generatePassword() {
  var userInput1 = window.prompt("How long would you like your new password to be? 8-128 characters, please.");
  var charSym = "";
  var password = "";

  // if requirements are met, run character selection prompts and function
  if (userInput1 >= 8 && userInput1 <= 128) {
    uppercase = confirm("Would you like to include some uppercase letters?");
    lowercase = confirm("How about lowercase?");
    numbers = confirm("Numbers?");
    specialCharacters = confirm("Last one, would you like any special characters?");

    if (uppercase === false && lowercase === false && numbers === false && specialCharacters === false) {
    alert("Please choose at least one!");
      password = "Try again!";
      return password;
    }

    if (lowercase) {
      charSym += passwordContent.lowercase;
    }

    if (uppercase) {
      charSym += passwordContent.uppercase;
    }

    if (numbers) {
      charSym += passwordContent.numbers;
    }

    if (specialCharacters) {
      charSym += passwordContent.specialCharacters;
    }

    for (let i = 0; i < userInput1; i++) {
      password += charSym[Math.floor(Math.random() * charSym.length)];
    }
    return password;
  }

  //if user enters a number too small or large, error message
  else if (userInput1 < 8 || userInput1 > 128) {
    window.alert("Try again!")
    password = "You broke it! Try again";
      return password;
  }

  // if user enters a character other than a number, error message
  else {
    window.alert("Please select a number between 8-128!")
    password = "*buzzer sound* Try again!";
      return password;
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
