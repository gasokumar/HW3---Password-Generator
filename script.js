// DEPENDENCIES (DOM Elements) ==========================
// Assignment Code
// Finds selector (tied to button), and puts it in a variable
// - Like na'vi from avatar, you have to link them to be able to manipulate it.
// Created the button in html, but you have to link it and store it in var generateBtn to be able to manipulate it
var generateBtn = document.querySelector("#generate");

// STARTING DATA (GLOBALS) =======================================

// HELPER FUNCTIONS ========================================

// Writes password to the #password input
// This is the function that returns the actual password
function writePassword() {
  var password = generatePassword(); //stores the output of a second function, generatePassword(); in the variable password
  var passwordText = document.querySelector("#password"); // Finds css selector #password (password output field) and allows you to manipulate it using passwordText
  passwordText.value = password; // Sets passwordText to the value of password.

  // The last two lines link the text of the password output field and replaces it with the output of the generatePassword function
}

// Create generatePassword();
function generatePassword() {
  var passLength = window.prompt(
    "How long do you want your password to be? (8-128 characters!)"
  );
  var responseLength;

  if (passLength.IsInteger == false) {
    responseLength = "Must be an integer!";
  } else if (passLength == 0) {
    responseLength = "Can't be 0!";
  } else if (passLength < 8) {
    responseLength = "Needs to be longer!";
  } else if (passLength > 128) {
    responseLength = "Needs to be shorter!";
  } else {
    responseLength = "Your password will be " + passLength + " digits long";
  }

  window.alert(responseLength);

  var password = "asokumar";
  return password;
}

// USER INTERACTIONS ========================================
// Add event listener to generate button
// Carries out function when the button is clicked
generateBtn.addEventListener("click", writePassword);

// INITIALIZATIONS (GETTING THINGS STARTED) ================

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
