// Unsafe JavaScript version
// This code can fail at runtime because JavaScript does not check types before execution.

function deriveFinalPrice(inputPrice) {
  const finalPrice = inputPrice + inputPrice * 0.19;

  // If this element does not exist, outputEl becomes null.
  const outputEl = document.getElementById('final-price');

  // Runtime error if outputEl is null:
  // Cannot set properties of null
  outputEl.textContent = 'Final Price: ' + finalPrice + ' €';
}

// If there is no form in HTML, formEl becomes null.
const formEl = document.querySelector('form');

// Runtime error if formEl is null:
// Cannot read properties of null
formEl.addEventListener('submit', function (event) {
  event.preventDefault();

  const fd = new FormData(event.currentTarget);
  const inputPrice = fd.get('price');

  // inputPrice comes from the form as a string.
  // Example: "100"
  // If user enters "abc", the result becomes NaN.
  deriveFinalPrice(+inputPrice);
});
