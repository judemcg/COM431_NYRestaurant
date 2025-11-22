// contact.js

// Use Input Class to Select all Fields
const inputs = document.querySelectorAll(".input");

// Get the Form Element by ID and Add an Event Listener
document
  .getElementById("contactForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the Form from Submitting to the Server

    let isValid = true; // Start by Assuming the Form is Valid

    // Check Each Input Field is Filled
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        isValid = false; // If Field is Not Filled, Make the Form Invalid
      }
    });

    // Stop Form Submission if any Field Is Empty and Cancel Execution
    if (!isValid) {
      alert("Please fill out all fields before sending.");
      return;
    }

    // Alert if all Fields are Filled
    alert("Your message has been sent.");

    // Clear Input After Execution
    inputs.forEach((input) => {
      input.value = ""; //
    });
  });
