// script.js
const cakeBase = document.getElementById('cake-base');
const ingredients = document.querySelectorAll('.ingredient');
const messageBox = document.getElementById('message-box');
const completeButton = document.getElementById('complete-button');
const resetButton = document.getElementById('reset-button');

// Drag-and-drop functionality
ingredients.forEach(ingredient => {
    ingredient.addEventListener('dragstart', dragStart);
});

cakeBase.addEventListener('dragover', dragOver);
cakeBase.addEventListener('drop', dropIngredient);

function dragStart(e) {
    e.dataTransfer.setData('text', e.target.dataset.name);
}

function dragOver(e) {
    e.preventDefault();
}

function dropIngredient(e) {
    const ingredientName = e.dataTransfer.getData('text');
    const ingredientEmoji = document.querySelector(`[data-name="${ingredientName}"]`).textContent;

    // Create the ingredient element and append to cake
    const newIngredient = document.createElement('div');
    newIngredient.classList.add('cake-topping');
    newIngredient.textContent = ingredientEmoji;
    cakeBase.appendChild(newIngredient);

    messageBox.textContent = `${ingredientName} added! Delicious! 🎂`;
}

// Complete cake button
completeButton.addEventListener('click', () => {
    if (cakeBase.children.length > 0) {
        messageBox.textContent = '🎉 Happy Birthday! 🎉 Your cake is ready!';
        cakeBase.innerHTML += `<div class="birthday-message">🎂 Happy Birthday! 🎂</div>`;
    } else {
        messageBox.textContent = 'Oops! Add some layers and toppings to complete your cake.';
    }
});

// Reset cake button
resetButton.addEventListener('click', () => {
    cakeBase.innerHTML = '';  // Clear all ingredients
    messageBox.textContent = 'Start building your cake again!';
});

