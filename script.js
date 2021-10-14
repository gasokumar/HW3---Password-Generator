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
  var password = "asokumar";
  return password;
}

// USER INTERACTIONS ========================================
// Add event listener to generate button
// Carries out function when the button is clicked
generateBtn.addEventListener("click", writePassword);

// INITIALIZATIONS (GETTING THINGS STARTED) ================
