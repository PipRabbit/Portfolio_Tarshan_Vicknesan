// mobile menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// contact form
function sendMessage() {
  const inputs = document.querySelectorAll("input, textarea");

  if (!inputs[0].value || !inputs[1].value || !inputs[2].value) {
    alert("Please fill all fields");
    return;
  }

  alert("Message sent successfully!");

  inputs.forEach(i => i.value = "");
}

// scroll animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let el of reveals) {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  }
});