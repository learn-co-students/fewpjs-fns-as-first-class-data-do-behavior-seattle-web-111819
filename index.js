/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  // The greet function should take one argument, a String which specifies the 24-hour time in the format HH:MM.

  // If the time is earlier than 12pm, return "Good Morning".
  // If the time is between 12pm and 5pm, return "Good Afternoon".
  // If the time is later than 5pm, return "Good Evening".


  let splitString = timeString.split(":")
  let hour = splitString[0]
  let timeNumber = parseInt(hour)
  

  if (timeNumber < 12) {
    return "Good Morning";
  } else if (timeNumber > 11 && timeNumber < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}


/* Write your implementation of displayMessage() */

function displayMessage(text) {
  // The displayMessage function should take one argument, a String.
  // When the function runs it should update the text inside the #greeting node // with the content of the first argument.
  // It does not return anything.


document.getElementById('greeting').innerText = text;
}