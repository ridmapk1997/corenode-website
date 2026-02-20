// Fade-in on scroll
const animated = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.12 }
);

animated.forEach((el) => observer.observe(el));

// WhatsApp Quote Button
const quoteBtn = document.getElementById("quoteBtn");

if (quoteBtn) {
  const phone = "94763064517"; // CHANGE to your WhatsApp number (no +)
  const message = encodeURIComponent(
    "Hi CoreNode! I'm interested in a website. Can you share pricing and timeline?"
  );

  quoteBtn.href = `https://wa.me/${phone}?text=${message}`;
}

// Active nav highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinksEl = document.getElementById("navLinks");

if (menuBtn && navLinksEl) {
  menuBtn.addEventListener("click", () => {
    navLinksEl.classList.toggle("open");
  });

  // Close menu when clicking a link (mobile)
  navLinksEl.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinksEl.classList.remove("open"));
  });
}

// Auto year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
