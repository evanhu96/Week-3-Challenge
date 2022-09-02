// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var types = 0
  // Gathering information
  var length = window.prompt("How many characters do you want your password to be?(8-128)");
  console.log(length);
  // between 8-128 characters
  if (length > 128 || length < 8 ){
    window.alert('Please choose between 8 and 128 characters!');
    return;
  }
  // More information gathering and building objects
  var lowercase ={
    list : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    active : window.confirm("Would you like lower case letters?"),
    index : 0  
  }
  var uppercase ={
    list : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    active : window.confirm("Would you like upper case letters?"),
    index : 0  
  }
  var numbers ={
    list : ['0','1','2','3','4','5','6','7','8','9'],
    active : window.confirm("Would you like numbers?"),
    index : 0  
  }
  var special ={
    list : ['!','@','#','$','%','^','&','*','(',')','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'],
    active : window.confirm("Would you like special characters?"),
    index : 0  
  }  
  // Setting line in index for chosen characters

  if (lowercase.active) {types ++; lowercase.index = types }
  if (uppercase.active) {types ++; uppercase.index = types }
  if (numbers.active) {types ++; numbers.index = types}
  if (special.active) {types ++; special.index = types}

//  If they say no to all character options
  if (types == 0) {
    window.alert('Well how do you expect me to make a password then??');
    return;}
  i = 0
// which character type to gran chracter from based on spot in index
  var password = '';
  while(i < length){
    spot = Math.floor(Math.random() * types ) + 1;
    if(lowercase.index == spot){password = password + lowercase.list[Math.floor(Math.random() * lowercase.list.length )];}
    if(uppercase.index == spot){password = password + uppercase.list[Math.floor(Math.random() * uppercase.list.length )];}
    if(numbers.index == spot){password = password + numbers.list[Math.floor(Math.random() * numbers.list.length )];}
    if(special.index == spot){password = password + special.list[Math.floor(Math.random() * special.list.length )];}
    i ++;
  


}

  // Original code 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
