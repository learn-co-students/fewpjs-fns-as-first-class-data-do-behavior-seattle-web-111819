/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const time = parseInt(timeString.split(":"))
  // If the time is earlier than 12pm, return "Good Morning".
  if (time < 12) {
    return "Good Morning";
    // If the time is between 12pm and 5pm, return "Good Afternoon".
  } else if ( time < 17) {
    return "Good Afternoon";
    // If the time is later than 5pm, return "Good Evening".
  } else {
    return "Good Evening";
  };
}; 

function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
};
