// Assignment Code
var generateBtn = document.querySelector("#generate");
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialCase = ["!", "@", "#", "$", "%", "*", "-"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterSelected = [];
var finalPassword = "";
var passwordItems = [];
var passwordLength = 0;

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  //prompt and conditions for password length
  reset();
  passwordLength = prompt("Enter a number from 8-128: ");
  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength)) {
    alert("Invalid entry. Please try again.");
    reset();
    return;
  };
  if ((passwordLength < 8 || passwordLength > 128)) {
    alert("Invalid entry. Please try again.");
    reset();
    return;
  };

  var password = function generatePassword(){}
  
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
