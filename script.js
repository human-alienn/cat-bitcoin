const toggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");

toggle.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
  overlay.classList.toggle("show");
  toggle.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  overlay.classList.remove("show");
  toggle.classList.remove("active");
});

// NEW: Auto-close when a nav link is clicked
document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    overlay.classList.remove("show");
    toggle.classList.remove("active");
  });
});

let currentSlide = 0;
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  currentSlide = index;
  slider.style.transform = `translateX(-${index * 50}%)`;
  slides.forEach((sl, i) => {
    sl.classList.toggle("active", i === index);
  });
}

document.querySelector(".slider-btn.right").onclick = () => {
  showSlide((currentSlide + 1) % slides.length);
};

document.querySelector(".slider-btn.left").onclick = () => {
  showSlide((currentSlide - 1 + slides.length) % slides.length);
};

/* SWIPE SUPPORT */
let startX = 0;

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {
    // swipe left
    showSlide((currentSlide + 1) % slides.length);
  } else if (endX - startX > 50) {
    // swipe right
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  }
});

const items = document.querySelectorAll(".roadmap-item");

items.forEach((item) => {
  const header = item.querySelector(".roadmap-header");
  const content = item.querySelector(".roadmap-content");
  const arrow = item.querySelector(".arrow");

  header.addEventListener("click", () => {
    content.classList.toggle("show");
    arrow.style.transform = content.classList.contains("show")
      ? "rotate(180deg)"
      : "rotate(0deg)";
  });
});
