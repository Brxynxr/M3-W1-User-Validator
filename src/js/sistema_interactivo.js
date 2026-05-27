// This function asks for data, removes empty spaces, and validates based on the type
function requestData(msg, type = "text") {
  while (true) {
    const txt = prompt(msg);

    // If the user presses "Cancel", we stop the function immediately
    if (txt === null) return null;

    // We remove any empty spaces on the sides
    const str = txt.trim();

    // We validate that the user did not leave the field blank
    if (str === "") {
      alert("This field cannot be empty, please try again.");
      continue;
    }

    // If the type parameter is "text", we return the clean data
    if (type === "text") return str;

    // If the type parameter is "number", we apply mathematical filters
    if (type === "number") {
      const num = Number(str);

      if (isNaN(num)) {
        // We log the exact error in the console and warn on the screen
        console.error("Error: Please enter a valid age in numbers.");
        alert("Invalid value, please enter a valid number.");
        continue;
      }
      if (num < 1) {
        alert("The value cannot be less than 1, please try again.");
        continue;
      }
      return num; // We return the purified real number
    }
  }
}

// Data input: we call the function using arguments as instructions
const name = requestData("Please enter your name:", "text");
const age = requestData("Please enter your age:", "number");

// We check if the user pressed "Cancel" in any of the windows
if (name === null || age === null) {
  alert("Process canceled by the user.");
} else {
  // If the data is complete, we evaluate if the user is an adult
  if (age >= 18) {
    alert(
      `Hello ${name}, you are an adult. Get ready for great opportunities in the world of programming!`,
    );
  } else {
    alert(
      `Hello ${name}, you are a minor. Keep learning and enjoying the code!`,
    );
  }
}
