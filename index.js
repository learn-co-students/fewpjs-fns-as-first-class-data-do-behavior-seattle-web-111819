document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str) {
  console.log(str.split(":"));
  const time = parseInt(str.split(":"));

  if (time < 12) {
    return "Good Morning";
  } else if (time > 16) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}

function displayMessage(str) {
  document.querySelector("#greeting").innerText = str;
}
/* Write your implementation of displayMessage() */

// /* Given Code, don't edit */

// function handleClick(e) {
//   const timeString = document.getElementById('time').value
//   displayMessage(greet(timeString))
// }

// /* End Given Code, don't edit above here...*/

// /* Write your implementation of greet() */
// function greet(timeString) {
//     const time = parseInt(timeString.split(':'))
//     if (time < 12) {
//       return "Good Morning";
//     }
//     else if (time > 17 ) {
//       return  "Good Evening";
//     }
//     else {
//       return "Good Afternoon";
//     }

// }
// /* Write your implementation of displayMessage() */
// function displayMessage(greet) {
//   document.getElementById('greeting').innerText = greet;
// }
