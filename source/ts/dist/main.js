"use strict";
// Compiled JavaScript output from src/main.ts
function deriveFinalPrice(inputPrice) {
    const finalPrice = inputPrice + inputPrice * 0.19;
    const outputEl = document.getElementById('final-price');
    if (!outputEl) {
        throw new Error('Output element not found');
    }
    outputEl.textContent = 'Final Price: ' + finalPrice.toFixed(2) + ' €';
}
const formEl = document.querySelector('form');
if (!formEl) {
    throw new Error('Form not found');
}
formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    const currentTarget = event.currentTarget;
    if (!(currentTarget instanceof HTMLFormElement)) {
        throw new Error('Current target is not a form');
    }
    const fd = new FormData(currentTarget);
    const rawPrice = fd.get('price');
    if (typeof rawPrice !== 'string') {
        alert('Price input is invalid.');
        return;
    }
    const price = Number(rawPrice);
    if (Number.isNaN(price)) {
        alert('Please enter a valid number.');
        return;
    }
    deriveFinalPrice(price);
});
