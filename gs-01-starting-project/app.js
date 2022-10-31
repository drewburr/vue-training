const buttonEl = document.querySelector('button'); // Get the button element from index.html
const inputEl = document.querySelector('input'); // Get the input element from index.html
const listEl = document.querySelector("ul"); // Get the ul element from index.html

function addGoal() {
    const enteredValue = inputEl.value; // Get value from input
    const listItemEl = document.createElement('li'); // Create list item element
    listItemEl.textContent = enteredValue; // Update the list item element's text with the input value
    listEl.appendChild(listItemEl); // Add new list item to list
    inputEl.value = ''; // Clear the input value
}

buttonEl.addEventListener('click', addGoal); // Tie clicking of the button to addGoal
