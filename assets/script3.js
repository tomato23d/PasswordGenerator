const numbers = [1,2,3,4,5,6,7,8,9,0];
const specialChs = ["!","@","#","$","%","^","&","*","(",")","_","+",",",".",".","-","/",";",
                  ":","<",">","=","?","[","]","`","~","{","|", "}",];

const letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s",
        "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

const lettersUC  = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", 
        "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];


var newPassword = "a"; 
    



var optionNumbers = window.prompt("include numbers: yes or no?", "yes");
if (optionNumbers !="no" && optionNumbers !="yes" ) {alert ("your selection is not valid");} 
else {var optionNumbers = "yes"};

var optionSpecialCh = window.prompt("include special characters?: yes or no?", "yes");
function rabits () {if (optionSpecialCh !="no" && optionSpecialCh != "yes") {};return}


var defineLength = window.prompt("select the length, minimum is 8 characters:");
var selectedLength = Number(defineLength);
function birds () {if (selectedLength < 8) {window.alert("at least eight characters please")};return}


//chicken ();
rabits();
birds();


if (optionNumbers === "yes" && optionSpecialCh === "yes") {
const password = letters.concat(specialChs, numbers, lettersUC); 
console.log(password);

for (var x = 0; x < selectedLength; x++) { 
var index = Math.floor(Math.random() * password.length);
var generatePassword = password[index];

console.log(generatePassword);
newPassword = newPassword + generatePassword;
console.log (newPassword);}}
console.log(newPassword.charAt(0));
newPassword = newPassword.slice(1)
console.log(newPassword);

var myDocpassword = document.querySelector("#mypassword");
console.log(myDocpassword);
myDocpassword.textContent = "This is a new password:  " + newPassword;


////////////////////////////////////////////////////////
if (optionNumbers === "no" && optionSpecialCh === "yes") {
        const password = letters.concat(specialChs, lettersUC); 
        console.log(password);
        
        for (var x = 0; x < defineLength; x++) { 
        var index = Math.floor(Math.random() * password.length);
        var generatePassword = password[index];
        
        console.log(generatePassword);
        newPassword = newPassword + generatePassword;
        console.log (newPassword);}}


/////////////////////////////////////
if (optionNumbers === "no" && optionSpecialCh === "no") {
const password = letters.concat(lettersUC); 
console.log(password);

for (var x = 0; x < defineLength; x++) { 
var index = Math.floor(Math.random() * password.length);
var generatePassword = password[index];

console.log(generatePassword);
newPassword = newPassword + generatePassword;
console.log (newPassword);}}