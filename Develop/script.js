// Assignment code here
// Get references to the #generate element

var lowercases = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercases = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specials = ['~','!','@','#','$','%','^','&','*','(',')','_','+',':',';','<','>','?','.'];
var numerics = ['1','2','3','4','5','6','7','8','9','0']

var generateBtn = document.querySelector("#generate");

generateBtn.onclick = function(){
      var howmany = window.prompt ("How many characters do you want in your password?");
      console.log (howmany);

      var lowercase = window.confirm ("Would you like lowercase letters in your password?");
      console.log (lowercase);

      var uppercase = window.confirm ("Would you like uppercase letters in your password?");
      console.log (uppercase);

      var special = window.confirm ("Would you like special characters in your password?");
      console.log (special);

      var numeric = window.confirm ("Would you like numbers in your password?");
      console.log (numeric);


}
            
            
            
            
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
