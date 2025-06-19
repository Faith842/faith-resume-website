const navToggle = document.getElementById("nav-toggle");
const navMenu = document.querySelector("nav ul");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
}

// Navbar toggle (already there)
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.querySelector("nav ul");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Contact form validation
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous messages
  formMessage.textContent = "";
  formMessage.style.color = "#d96f7b"; // default red for errors

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill out all fields.";
    return;
  }

  // Simple email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }

  // If all valid:
  formMessage.style.color = "#4CAF50"; // green
  formMessage.textContent = "Thank you for your message! I will get back to you soon.";

  // Clear form fields
  form.reset();
});


);

