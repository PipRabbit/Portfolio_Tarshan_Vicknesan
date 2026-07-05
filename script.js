
let galleries = {
  portfolio: [
    "images/portfolio-1.png"
  ],
  game: [
    "images/game_1.png",
    "images/game_2.png",
    "images/game_3.png",
    "images/game_4.png",
    "images/game_5.png"
  ],
  trello: [
    "images/pathflow_1.png",
    "images/pathflow_2.png",
    "images/pathflow_3.png",
    "images/pathflow_4.png"
  ]
};

let currentGallery = [];
let currentIndex = 0;

function openGallery(name, index) {
  currentGallery = galleries[name];
  currentIndex = index;

  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  img.src = currentGallery[currentIndex];
  lightbox.style.display = "flex";

  updateCounter();

  document.addEventListener("keydown", handleKeys);
}

function closeGallery() {
  document.getElementById("lightbox").style.display = "none";
  document.removeEventListener("keydown", handleKeys);
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = currentGallery.length - 1;
  if (currentIndex >= currentGallery.length) currentIndex = 0;

  const img = document.getElementById("lightbox-img");
  img.src = currentGallery[currentIndex];

  updateCounter();
}

function updateCounter() {
  document.getElementById("counter").innerText =
    (currentIndex + 1) + " / " + currentGallery.length;
}

function handleKeys(e) {
  if (e.key === "Escape") closeGallery();
  if (e.key === "ArrowRight") changeImage(1);
  if (e.key === "ArrowLeft") changeImage(-1);
}

/* MOBILE SWIPE SUPPORT */
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (!currentGallery.length) return;

  if (touchEndX < touchStartX - 50) {
    changeImage(1);
  }

  if (touchEndX > touchStartX + 50) {
    changeImage(-1);
  }
}

/* NAV MENU */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* CONTACT FORM */
function sendMessage() {
  const inputs = document.querySelectorAll("input, textarea");

  if (!inputs[0].value || !inputs[1].value || !inputs[2].value) {
    alert("Please fill all fields");
    return;
  }

  alert("Message sent successfully!");
  inputs.forEach(i => i.value = "");
}

/* REVEAL ANIMATION */
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

window.addEventListener("load", revealElements);
window.addEventListener("scroll", revealElements);