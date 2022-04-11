var generateBtn = document.querySelector("#generate");


// generation function
var generatePassword = function() {

  var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseArray = "abcdefghijklmnopqrstuvwxyz";
  var numericArray = "0123456789";
  var specialArray = "@!#$%^&*()-_=+";

//******************************************************* */
  var userPasswordPool = [];
  var randomPassword = [];
  
  // length of password with length conditions
  var userLength = window.prompt("How many characters, between 8 and 128, would you like your password to contain?")
    if (userLength < 8 || userLength > 128) {
    
      window.alert ("You need between 8 and 128 characters in your password.");
      generatePassword();   

    };
    console.log(userLength);
  
  // confirm lowercase
  var lowerCaseConfirm = window.confirm("Should your password contain Lowercase letters? (If not, choose 'cancel'.");
    if (lowerCaseConfirm) {
      
      userPasswordPool += lowercaseArray;
    
    }
  
  // confirm uppercase
  var upperCaseConfirm = window.confirm("Should your password contain uppercase letters?");
    if (upperCaseConfirm) {
      
      userPasswordPool += uppercaseArray;
    
    }
  
  // confirm numerics
  var numericConfirm = window.confirm("Should your password contain numerics?");
    if (numericConfirm) {
    
      userPasswordPool += numericArray;
  
    }
    
    
  // confirm special characters
  var specialCharConfirm = window.confirm("Should your password contain special characters?");
    if (specialCharConfirm) {
      
      userPasswordPool += specialArray;
      
    }
    console.log(userPasswordPool);
    
  for (var i = 0; i < userLength; i++) {
    
    randomPassword.push (userPasswordPool[Math.floor(Math.random() * userPasswordPool.length)]);
    }

    return randomPassword.join("");
  


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  window.alert("Your password is " + password);
  
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

    

