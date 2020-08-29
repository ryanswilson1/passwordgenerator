// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z '];
const upperCase = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const Numbers = ['0','1', '2', '3','4','5','6','7','8','9'];
const specialCharacters = ['!', '@','#','$','%','^','&','*','<','>','?'];

// Write password to the #password input

var password = generatePassword(); {
  var lengthSt = prompt('How long do you want your Password to be?');

  var length = parseInt(lengthSt);

  if (length < 8) {
    alert('Password length must be at least 8 characters.');
    return;
  }
  if (length > 128) {
    alert('Password can be no longer than 128 characters.');
    return;
  }

  var hasSpecialCharacter = confirm('Do you want special characters?');
  var hasNumbers = confirm('Do you want to use numbers?');
  var hasUpperCase = confirm('Do you want Uppercase letters?')
  var hasLowerCase = confirm('Do you want Lowercase letters?')

  var randomPassword = [];
  var passwordOptions = [];


  if(hasSpecialCharacter == false && hasNumbers == false && hasUpperCase == false && hasLowerCase == false) {
    alert('Password must have selected parameters');
    return
  }

  if(hasSpecialCharacter) {
    passwordOptions.concat(specialCharacters)
  }
  if(hasNumbers) {
    passwordOptions.concat(Numbers)
  }
  if(hasUpperCase) {
    passwordOptions.concat(upperCase)
  }
  if(hasLowerCase) {
    passwordOptions.concat(lowerCase)
  }
  
  console.log(passwordOptions)


  return randomPassword;
}

function writePassword() {
  var password = generatePass();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

