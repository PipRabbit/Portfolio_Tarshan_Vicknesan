function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

function sendMessage() {
  const inputs = document.querySelectorAll("input, textarea");

  if (!inputs[0].value || !inputs[1].value || !inputs[2].value) {
    alert("Please fill all fields");
    return;
  }

  alert("Message sent successfully!");
  inputs.forEach(i => i.value = "");
}

function revealElements() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("load", () => {
  revealElements();
});

window.addEventListener("scroll", revealElements);