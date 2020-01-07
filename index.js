/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let splitString = timeString.split(":")
  let hour = splitString[0]
  let timeNumber = parseInt(hour)
  
//If the time is earlier than 12pm, return "Good Morning".
  if (timeNumber < 12) {
    return "Good Morning";
// If the time is between 12pm and 5pm, return "Good Afternoon".
  } else if (timeNumber > 11 && timeNumber < 17) {
    return "Good Afternoon";
 // If the time is later than 5pm, return "Good Evening".
  } else {
    return "Good Evening";
  };
};



/* Write your implementation of displayMessage() */

// The displayMessage function should take one argument, a String.
  // When the function runs it should update the text inside the #greeting node // with the content of the first argument.
  // It does not return anything.

function displayMessage(message) {
 
document.getElementById('greeting').innerText = message;
};
