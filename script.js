var generateBtn = document.querySelector("#generate");

var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
var numVar = "0123456789";
var specialChar = "!@#$%^&?";
var builtString = ""

var passwordLength = parseInt(prompt ("How many characters would you like your password to be?"))
var inputLower = confirm("Do you want your password to contain lower case letters? Press OK for Yes. Press Cancel for No.")
var inputUpper = confirm("Do you want your password to contain upper case letters? Press OK for Yes. Press Cancel for No.")
var inputNum = confirm("Do you want your password to contain numbers? Press OK for Yes. Press Cancel for No.")
var inputChar = confirm("Do you want your password to contain special characters? Press OK for Yes. Press Cancel for No.")


if (passwordLength < 8) {
 alert ("Your password must be at least 8 charaters.")
} 

if (passwordLength > 128) {
alert ("Your password must be less than 128 characters.")
}

function generatePassword() {

  if (inputLower === true) {
    builtString +=  lowerAlpha
  }

  if (inputUpper === true) {
      builtString += upperAlpha
  }

  if (inputNum === true){
    builtString += numVar
  }

 if (inputChar === true) {
   builtString += specialChar
 }

  var randomPassword = " "
  for (let i = 0; i < passwordLength; i++) {
    var randomLower = Math.floor(Math.random()*builtString.length);
    randomPassword += builtString[randomLower]
  }
  
  password = randomPassword; 

  return password
}

function writePassword(event) {
  event.preventDefault()
  var passwordSpan = document.querySelector("#password"); 
  passwordSpan.value = ""; 
  var password = generatePassword();
  passwordSpan.value = password; 

}

generateBtn.addEventListener("click", writePassword);
