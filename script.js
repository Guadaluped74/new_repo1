// Assignment Code
var generateBtn = document.querySelector('#generate');
 generateBtn.addEventListener('click', writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
 
  passwordText.value = password;
}

var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"]; 
  


function generatePassword () {
  password.inneHtml="";
  var pwlength = prompt("how long should the password be {8-128}?");{
   if(pwlength<8) {
   alert("higher number");
  }
  else if  (pwlength > 128) {
    alert("lower number");
  }
  else if (isNaN(pwlength)===true) {
  alert("number please");

  }
}

  
  alert("password is lower case by default")

  

var character = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 

  var capital = confirm("Capital letters?");
  if (capital === true) {character.push(capLetter);
  alert("Capital letters selected");
  } 
  else alert("No capital letters.");
 
  }

  

var numbers = confirm( "numbers?");
  if (numbers === true){character.push(number);
    alert("numbers selected");}
 
  else alert("No numbers.");
 

var specials = confirm( "special characters ?");
  if (specials === true){character.push(special);
    alert("specials selected");}
 
  else alert("No specials.");
 



for (let i = 0; i < array.pwlength; i++) {
  var choices = character[math.floor(math.radom()*character.pwlength)]
  document.getElementById("password").innerHTML += choices;
  
}


// Add event listener to generate button



