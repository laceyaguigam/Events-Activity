// Add a button element to the HTML file.

// Add an event listener to the button that displays an alert when the button is clicked.

// Can you make it so that this event listener only triggers the first time that the button is clicked and then never again?

// Add a link element to the HTML file that goes to your favorite website.

// Add an event listener to the link that prevents it from navigating to the website when you click it.

// Add more code to the event listener for the link that pops up an alert that says “No distractions! I’m coding!”

function buttonClick () {
    console.log("I was Picked! ");
}

let button = document.querySelector("button");

button.addEventListener("click", buttonClick);
button.removeEventListener("click", buttonClick);