// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt(
    "How many characters would you like your password to be? (8-128)"
  );

  // Check if password length is within range, if not, return with an alert
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return "";
  }

  var includeLowercase = confirm(
    "Would you like to include lowercase letters?"
  );
  var includeUppercase = confirm(
    "Would you like to include uppercase letters?"
  );
  var includeNumbers = confirm("Would you like to include numbers?");
  var includeSpecial = confirm("Would you like to include special characters?");

  // Check if at least one character type is selected
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSpecial
  ) {
    alert("At least one character type must be selected.");
    return "";
  }
  // Defining characters
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = "!#$%&()*+,-./:;<=>?@[\\]^_`{|}~";
  var allCharacters = "";

  if (includeLowercase) {
    allCharacters += lowercaseCharacters;
  }

  if (includeUppercase) {
    allCharacters += uppercaseCharacters;
  }

  if (includeNumbers) {
    allCharacters += numbers;
  }

  if (includeSpecial) {
    allCharacters += specialCharacters;
  }

  var password = "";

  // for loop to repeat
  // Math.random used with Math.floor used to return random integers.

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}
