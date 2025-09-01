// ----------------------
// FORM VALIDATION + CHARACTER COUNTER
// ----------------------
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop default form submission

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  // Custom validation rules
  if (name.length < 3) {
    formMessage.textContent = "❌ Name must be at least 3 characters long.";
    formMessage.style.color = "red";
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "❌ Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }
  if (message.length < 10) {
    formMessage.textContent = "❌ Message must be at least 10 characters long.";
    formMessage.style.color = "red";
    return;
  }

  // If everything is valid
  formMessage.textContent = "✅ Form submitted successfully!";
  formMessage.style.color = "green";
  document.getElementById("contactForm").reset();
  document.getElementById("charCount").textContent = "0 characters";
});

// Live character counter for message input
document.getElementById("message").addEventListener("input", function() {
  let length = this.value.length;
  let counter = document.getElementById("charCount");
  counter.textContent = length + " characters";

  if (length < 10) {
    counter.style.color = "red";
  } else {
    counter.style.color = "green";
  }
});

// ----------------------
// COUNTER FEATURE
// ----------------------
let counterValue = 0;

document.getElementById("increaseBtn").addEventListener("click", function() {
  counterValue++;
  document.getElementById("counter").textContent = counterValue;
});

document.getElementById("decreaseBtn").addEventListener("click", function() {
  counterValue--;
  document.getElementById("counter").textContent = counterValue;
});

// ----------------------
// TOGGLE FEATURE (using classList.toggle)
// ----------------------
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("secretMessage").classList.toggle("hidden");
});

// ----------------------
// RANDOM BACKGROUND COLOR
// ----------------------
document.getElementById("colorBtn").addEventListener("click", function() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

