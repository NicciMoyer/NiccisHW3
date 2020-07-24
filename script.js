// Assignment Code
var generateBtn = document.querySelector("#generate");
//BOILERPLATE CODE ABOVE- DO NOT CHANGE 

var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
var numVar = "0123456789";
var specialChar = "!@#$%^&?";
var builtString = ""

var randomPassword = ""

var inputLower = confirm("Do you want your password to contain lower case letters?")
var inputUpper = confirm("Do you want your password to contain upper case letters?")
var inputNum = confirm("Do you want your password to contain numbers?")
var inputChar = confirm("Do you want your password to contain special characters?")
var passwordLength = parseInt(prompt ("How many characters would you like your password to be?"))

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


  for (let i = 0; i < passwordLength; i++) {
    var randomLower = Math.floor(Math.random()*builtString.length);
    randomPassword += builtString[randomLower]
  }
  // console.log(randomPassword)
  
  // for (let i  = 0; i < 8; i++) {
  //   var randomUpper = Math.floor(Math.random()*upperAlpha.length);
  //   randomPassword += upperAlpha[randomUpper]  
  // }   
  // // console.log(randomPassword)
  
  
  // for (let i  = 0; i < 8; i++) {
  //   var randomNum = Math.floor(Math.random()*numVar.length);
  //   randomPassword += numVar[randomNum]  
  // }   
  // // console.log(randomPassword)
  

  // for (let i  = 0; i < 12; i++) {
  //   var randomChar = Math.floor(Math.random()*specialChar.length);
  //   randomPassword += specialChar[randomChar]  
  // }   
  // console.log(randomPassword)

  // randomPassword += randomLower;

  // randomPassword += randomUpper; 

  // randomPassword += randomNum; 
  
  // randomPassword += randomChar;

  password = randomPassword; 

  return password
}

function writePassword() {
  var password = generatePassword();
  var passwordSpan = document.querySelector("#password"); 

  passwordSpan.value = password; 
  
}





//BOILERPLATE CODE BELOW- DO NOT CHANGE 
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
