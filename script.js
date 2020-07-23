// Assignment Code
var generateBtn = document.querySelector("#generate");
//BOILERPLATE CODE ABOVE- DO NOT CHANGE 

var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
var numVar = "0123456789";
var specialChar = "!@#$%^&?";

var randomPassword = ""







function generatePassword(passwordLength ) {


  for (let i = 0; i < 8; i++) {
    var randomLower = Math.floor(Math.random()*lowerAlpha.length);
    randomPassword += lowerAlpha[randomLower]
  }
  // console.log(randomPassword)
  
  for (let i  = 0; i < 8; i++) {
    var randomUpper = Math.floor(Math.random()*upperAlpha.length);
    randomPassword += upperAlpha[randomUpper]  
  }   
  // console.log(randomPassword)
  
  
  for (let i  = 0; i < 8; i++) {
    var randomNum = Math.floor(Math.random()*numVar.length);
    randomPassword += numVar[randomNum]  
  }   
  // console.log(randomPassword)
  

  for (let i  = 0; i < 12; i++) {
    var randomChar = Math.floor(Math.random()*specialChar.length);
    randomPassword += specialChar[randomChar]  
  }   
  console.log(randomPassword)

  randomPassword += randomLower;

  randomPassword += randomUpper; 

  randomPassword += randomNum; 
  
  randomPassword += randomChar;

  password = randomPassword; 


}

function writePassword() {
  var password = generatePassword();
  var randomPassword = document.querySelector("#password"); 

  randomPassword.value = password; 
  
}


// if (passwordLength < 8) {
//   return = "Your password must be at least 8 charaters."
// } 

// if (passwordLength > 128) {
//   return = "Your password must be less than 128 characters."
// }



//BOILERPLATE CODE BELOW- DO NOT CHANGE 
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
