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
  let hourNumber = parseInt(hour)
  if (hourNumber < 12) {
    return "Good Morning";
  } else if (hourNumber > 11 && hourNumber < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }  
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  document.getElementById("greeting").innerText = string;
} 
