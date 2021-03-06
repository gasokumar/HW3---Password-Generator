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
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Create generatePassword();
function generatePassword() {
  var password = "";
  var passwordRender = "";
  var passLength = window.prompt(
    "How long do you want your password to be? (8-128 characters!)"
  );
  // passLength = parseInt(passwordLength);
  var responseLength;

  if (passLength == 0) {
    responseLength = "Can't be 0!";
    window.alert(responseLength);
    return;
  } else if (passLength < 8) {
    responseLength = "Needs to be longer!";
    window.alert(responseLength);
    return;
  } else if (passLength > 128) {
    responseLength = "Needs to be shorter!";
    window.alert(responseLength);
    return;
  } else {
    responseLength = "Your password will be " + passLength + " digits long";
  }

  window.alert(responseLength);

  var lowercaseCharacters = window.confirm(
    "Do you want to include lowercase characters in your password?"
  );
  if (lowercaseCharacters) {
    passwordRender += lowercaseChar;
  }
  var uppercaseCharacters = window.confirm(
    "Do you want to include uppercase characters in your password?"
  );
  if (uppercaseCharacters) {
    passwordRender += uppercaseChar;
  }
  var numericalCharacters = window.confirm(
    "Do you want to include numbers in your password?"
  );
  if (numericalCharacters) {
    passwordRender += numericalChar;
  }
  var specialCharacters = window.confirm(
    "Do you want to include special characters in your password?"
  );
  if (specialCharacters) {
    passwordRender += specialChar;
  }
  for (var i = 0; i < passLength; i++) {
    password +=
      passwordRender[Math.floor(Math.random() * passwordRender.length)];
  }
  console.log(passwordRender);
  return password;
}

// USER INTERACTIONS ========================================
// Add event listener to generate button
// Carries out function when the button is clicked
generateBtn.addEventListener("click", writePassword);

// INITIALIZATIONS (GETTING THINGS STARTED) ================

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the
