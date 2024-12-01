/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
function DrawSpiral(context) {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();
    for (let counter = 3; counter < 600; counter += 3) {
        moveForward(counter, context);
        context.stroke();
        turnRight(89);
    }
}

// Show the greeting based on the time of day
function alertGreeting() {
    // Check if the greeting has already been shown in this session
    if (!sessionStorage.getItem("greetingShown")) {
        const hours = new Date().getHours();
        let greeting;
        if (hours < 12) {
            greeting = "Good morning! Welcome to Team 33's website!";
        } else if (hours < 18) {
            greeting = "Good afternoon! Welcome to Team 33's website!";
        } else {
            greeting = "Good evening! Welcome to Team 33's website!";
        }
        alert(greeting);

        // Mark the greeting as shown
        sessionStorage.setItem("greetingShown", "true");
    }
}

/* Wep Project */
// JavaScript to handle form submission
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload on form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display a confirmation message
    const formResponse = document.getElementById("formResponse");
    formResponse.innerText = `Thank you for your feedback, ${name}! We will review your message shortly.`;

    // Clear form after submission
    document.getElementById("feedbackForm").reset();
});

