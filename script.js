// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
 
  passwordText.value = password;
}

var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specials =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"]; 
  


function generatePassword () {
  password.inneHtml="";
  var pwlength = prompt("how long should the password be {8-128}?");{
   if(pwlength<8) {
   alert("higher number");
  }
  else if (pwlength > 128) {
    alert("lower number");
  }
  else if (isNaN(pwlength)===true) {
  alert("number please");
  return
  }
}

  
alert("password will have lowercase as a default")

  

var character = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 

  var capital = confirm("Capital letters?");{
  if (capital === true) {character.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  alert("Capital letters selected");
  } 
  else alert("No capital letters.");
  }
  

  

var numbers = confirm( "numbers?");{
  if (numbers === true){character.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    alert("numbers selected");}
 
  else alert("No numbers.");
}

var specials = confirm( "special characters ?");{
  if (specials === true){character.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+");
    alert("specials selected");}
 
  else alert("No specials.");
}


  


for(var i = 0; i < pwlength; i++){
        
  var choices = character[Math.floor(Math.random() * character.pwlength)]
  document.getElementById("password").innerHTML += choices



}
console.log(choices);
console.log(character);
}
console.log(writePassword());
console.log(generatePassword());

// Add event listener to generate button



