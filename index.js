/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById("greeting").innerText = string
}



function greet(string) {
  let nString = parseInt(string, 10);
  if (nString < 12) return `Good Morning`;
  if (nString > 17) return `Good Evening`;
  return `Good Afternoon`
  }

  // function displayMessage()
