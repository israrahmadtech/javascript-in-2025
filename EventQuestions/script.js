// 1. What is an event in JavaScript?   ........................................................

// An event in JavaScript is an action or occurrence that happens in the browser, which your code can respond to.
// Or the interactions of user with the browser is called an event

// Examples of events include:
//     A user clicking a button
//     A page loading
//     A key being pressed
//     A mouse hovering over an element
//     A form being submitted



// 2. What is the difference between an event handler and an event listener?  ........................................................

// Event Handler
//     An event handler is the function that runs in response to an event.

// function handleClick() {
//   console.log("Button clicked!");
// }
// In this example, handleClick is the event handler — it defines what to do when the event occurs.


// Event Listener
//     An event listener is a method that you use to register an event handler for a specific event on a specific element.

// const button = document.getElementById("myBtn");
// button.addEventListener("click", handleClick);

// Here:
//     addEventListener is the event listener method.
//     "click" is the event type.
//     handleClick is the event handler function.



// 3. What is the syntax of addEventListener()?   ........................................................

// The syntax of addEventListener() in JavaScript is:

// element.addEventListener(event, handler, useCapture);

// Parameters Explained:
// Parameter                	Description

// event	                A string that specifies the event type, like "click", "mouseover", "keydown", etc.
// handler              	The function to run when the event occurs (the event handler).
// useCapture (optional)	A boolean value that specifies whether the event should be captured during the capture phase (true) or bubble phase (false). Default is false.



// 4. Can we add multiple event listeners to the same element?   ....................................................

// You can add multiple event listeners to the same element, even for the same event type.

// This is one of the advantages of using addEventListener() over setting an onclick, onmouseover, etc., directly.
// ✅ Example: Multiple listeners on the same element

// const button = document.getElementById("myBtn");
// button.addEventListener("click", function () {
//   console.log("First click handler");
// });

// button.addEventListener("click", function () {
//   console.log("Second click handler");
// });

// When the button is clicked, both event listeners will run, in the order they were added.


// ❌ But if you use traditional event handlers like this:

// button.onclick = function () {
//   console.log("Only this will run");
// };

// button.onclick = function () {
//   console.log("This replaces the previous one");
// };

// ❗ The second one overwrites the first one — only the latest will run.

// So for multiple actions on the same event, always go with addEventListener()


// 5. How do you remove an event listener?  ........................................................
// Yoo cam remove an eventListner using removeEventListner()
// button.removeEventListener("click", showAlert);


