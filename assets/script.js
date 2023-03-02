// source the input characters
const numbers =    [1,2,3,4,5,6,7,8,9,0];

const specialChs = ["!","@","#","$","%","^","&","*","(",")","_","+",",",".",".","-","/",";",
                   ":","<",">","=","?","[","]","`","~","{","|", "}",];

const letters =    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s",
                   "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

const lettersUC  = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", 
                   "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

    
var generateBtn = document.querySelector("#generate");

function writePassword() {

var possibleChoices = [];
var newPassword = "a"; 

// prompt for user selection on type of characters to include 

var optionNumbers       = window.confirm("Would you like to include numbers? OK for yes or Cancel for no ", "yes");
var optionSpecialChs    = window.confirm("Would you like to include special characters? OK for yes or Cancel for no ", "yes");
var optionLetters       = window.confirm("Would you like to include letters? OK for yes or Cancel for no ", "yes");
var optionLettersUC     = window.confirm("Would you like to include upper case letters? OK for yes or Cancel for no ", "yes");

var defineLength        = window.prompt("Please select the password length, minimum is 8 characters:", "8");
console.log(isNaN(defineLength));
if (defineLength < 8)   {alert ("your selection is not valid, please select at least eight characters"); defineLength = 0}; 
if (defineLength > 128) {alert ("your selection is not valid, please select no more than 128 characters"); defineLength = 0} ;
if (isNaN(defineLength)===true) 
                        {alert ("your selection is not valid, please input the number of characters for the length of the password");} 

if (optionNumbers === false && optionSpecialChs === false && optionLetters === false && optionLettersUC === false)
                        {alert ("please select at least one choice")};

// assemble the password source on the basis of choices made
if (optionNumbers===true){ 
                        possibleChoices = possibleChoices.concat(numbers);
}
if (optionSpecialChs===true){ 
                        possibleChoices = possibleChoices.concat(specialChs);
}
if (optionLetters===true){ 
                        possibleChoices = possibleChoices.concat(letters);
}
if (optionLettersUC===true){ 
                        possibleChoices = possibleChoices.concat(lettersUC);
}
 console.log(possibleChoices);

 //generate the password of required length

 for (  var x = 0; x < defineLength; x++) { 
        var index = Math.floor(Math.random() * possibleChoices.length);
        var generatePassword = possibleChoices[index];
        
console.log(generatePassword);
newPassword = newPassword + generatePassword;
console.log (newPassword);}
        

console.log(newPassword.charAt(0));
newPassword = newPassword.slice(1);
console.log(newPassword);

//assign the generated password to html element
var myDocpassword = document.querySelector("#password");
myDocpassword.value = "Your secure password:  " + newPassword;}
        
//invoke the function and complete the exercise       
generateBtn.addEventListener("click", writePassword);
        
