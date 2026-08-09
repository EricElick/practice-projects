let message = "Dentist tomorrow at 10am";

console.log(message.includes("am")); //true
console.log(message.includes("pm")); //false
console.log(message.includes("noon")); //false

//Includes without an array
function hasRecognizableTime(message) {
    return message.includes("am") ||
           message.includes("pm") ||
           message.includes("noon") ||
           message.includes("midnight");
}

let message = "tomorrow at 11";

if (hasRecognizableTime(message)) {
    console.log("The message contains known time markers");
} else {
    console.log("The message does not include any known time markers.");
}