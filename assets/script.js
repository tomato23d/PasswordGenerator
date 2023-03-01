const numbers = [1,2,3,4,5,6,7,8,9,0];
const specialChs = ["!","@","#","$","%","^","&","*","(",")","_","+",",",".",".","-","/",";",
                  ":","<",">","=","?","[","]","`","~","{","|", "}",];

const letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s",
        "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

const lettersUC  = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", 
        "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

    
var generateBtn = document.querySelector("#generate");

function writePassword() {

var newPassword = "a"; 
var optionNumbers = window.confirm("include numbers: yes or no?", "yes");
var optionSpecialCh = window.confirm("include special characters?: yes or no?", "yes");
var optionLetters = window.confirm("include letters: yes or no?", "yes");
var optionLettersUC = window.confirm("include Upper Case letters: yes or no?", "yes");


var defineLength = window.prompt("select the length, minimum is 8 characters:", "8");
console.log(isNaN(defineLength));
if (defineLength < 8) {alert ("your selection is not valid, at least eight characters please");} 
if (defineLength > 128) {alert ("your selection is not valid, no more than 128 characters please");} 
if (isNaN(defineLength)===true) {alert ("your selection is not valid, please input the number of characters for the length of the password");} 

if (optionNumbers === false && optionSpecialCh === false && optionLetters === false &&
        optionLettersUC === false){alert ("please select at least one choice")};

var possibleChoices = [];
if (optionNumbers===true){ 
                        possibleChoices = possibleChoices.concat(numbers);
}
if (optionSpecialCh===true){ 
                        possibleChoices = possibleChoices.concat(specialChs);
}
if (optionLetters===true){ 
                        possibleChoices = possibleChoices.concat(letters);
}
if (optionLettersUC===true){ 
                        possibleChoices = possibleChoices.concat(lettersUC);
}
 console.log(possibleChoices);

 for (  var x = 0; x < defineLength; x++) { 
        var index = Math.floor(Math.random() * possibleChoices.length);
        var generatePassword = possibleChoices[index];
        
        console.log(generatePassword);
        newPassword = newPassword + generatePassword;
        console.log (newPassword);}
        

        console.log(newPassword.charAt(0));
        newPassword = newPassword.slice(1)
        console.log(newPassword);
        
        var myDocpassword = document.querySelector("#password");
        myDocpassword.value = "Your secure password:  " + newPassword;}
        
        
        
        generateBtn.addEventListener("click", writePassword);
        