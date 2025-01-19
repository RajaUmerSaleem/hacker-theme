// Create the hacker animation div
const hackerAnimationDiv = document.createElement('div');
hackerAnimationDiv.className = 'hacker-animation';
document.body.appendChild(hackerAnimationDiv);

// Create the hacked message div
const hackedMessageDiv = document.createElement('div');
hackedMessageDiv.className = 'hacked-message';
hackedMessageDiv.textContent = 'Hacked Successfully!!';
document.body.appendChild(hackedMessageDiv);

// Debugging: Log to verify elements are created
console.log('Hacker animation div:', hackerAnimationDiv);
console.log('Hacked message div:', hackedMessageDiv);