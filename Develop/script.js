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

var promptDict = {
  upperChecked: false,
  lowerChecked: false,
  specialChecked: false,
  numberChecked: false
};
var promptText = {
  upperChecked: "Upper Case Characters",
  lowerChecked: "Lower Case Characters",
  specialChecked: "Special Characters",
  numberChecked: "Numbers"
};

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
  //looping through object to assign boolean values to prompts
  var keys = Object.keys(promptText);
  for (var i = 0; i < keys.length; i++) {
    var starterPrompt = prompt("Add " + promptText[keys[i]] + "?\nPlease enter 'y' for yes, or 'n' for no.");
    starterPrompt = starterPrompt.toLowerCase();
    if (starterPrompt === "y" || starterPrompt === "n") {
      if (starterPrompt === "y") {
        promptDict[keys[i]] = true;
        passwordItems.push(`${promptText[keys[i]]}\n`);
      } else {
        promptDict[keys[i]] = false;
      };
    } else {
      alert("Invalid response. Please enter 'y' or 'n'.");
      reset();
      return;
    };
  };

  var password = function generatePassword(){}
  
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
