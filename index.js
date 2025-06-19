// Step 1: Remove the <main id="main"> element
const main = document.getElementById("main");
main.remove();

// Step 2: Create a new <h1> element and assign it to a variable
const newHeader = document.createElement("h1");

// Step 3: Set the id of the newHeader to "victory"
newHeader.id = "victory";

// Step 4: Set the text content of newHeader
newHeader.textContent = "Mohamed Amin is the champion";

// Step 5: Append the newHeader to the body
document.body.append(newHeader);
