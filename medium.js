//MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
const userInput = prompt("Please enter text");

if(userInput === userInput.toUpperCase()){
    console.log("Shouting")
} 

else if(userInput === userInput.toLowerCase()){
    console.log("Whispering")
} 

else{
    console.log("Neither")
}