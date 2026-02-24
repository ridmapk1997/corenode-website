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

// Banner slider (with dots)
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dotsWrap = document.getElementById("dots");

let index = 0;
let timer = null;

function showSlide(i){
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");

  if (dotsWrap) {
    dotsWrap.querySelectorAll(".dot").forEach((d, di) => {
      d.classList.toggle("active", di === i);
    });
  }
}

function startAuto(){
  stopAuto();
  timer = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 4500);
}

function stopAuto(){
  if (timer) clearInterval(timer);
}

if (slides.length) {
  // Build dots
  if (dotsWrap) {
    dotsWrap.innerHTML = "";
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dot.type = "button";
      dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
        startAuto();
      });
      dotsWrap.appendChild(dot);
    });
  }

  // Buttons
  if (next) {
    next.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      showSlide(index);
      startAuto();
    });
  }

  if (prev) {
    prev.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
      startAuto();
    });
  }

  startAuto();
}

// Custom quote button
const customBtn = document.getElementById("customQuoteBtn");

if (customBtn) {
  const phone = "9477XXXXXXX"; // YOUR NUMBER
  const msg = encodeURIComponent(
    "Hi CoreNode, I need a custom website package. Can we discuss pricing?"
  );

  customBtn.href = `https://wa.me/${phone}?text=${msg}`;
  customBtn.target = "_blank";
}

// Floating WhatsApp button
const floatWhatsApp = document.getElementById("floatWhatsApp");
if (floatWhatsApp) {
  const phone = "94763064517"; // your number (no +)
  const msg = encodeURIComponent("Hi CoreNode! I'm interested in a website. Can we discuss?");
  floatWhatsApp.href = `https://wa.me/${phone}?text=${msg}`;
}

// Back to top button
const backTop = document.getElementById("backTop");

if (backTop) {
  window.addEventListener("scroll", () => {
    backTop.classList.toggle("show", window.scrollY > 500);
  });

  backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Contact form AJAX submit (stay on page)
const contactForm = document.getElementById("contactForm");
const sendBtn = document.getElementById("sendBtn");
const formStatus = document.getElementById("formStatus");

if (contactForm && sendBtn && formStatus) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    sendBtn.disabled = true;
    sendBtn.textContent = "Sending...";
    formStatus.textContent = "";

    try {
      const res = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        contactForm.reset();
        document.getElementById("successModal").classList.add("show");
      } else {
        formStatus.textContent = "⚠️ Something went wrong. Please try again.";
      }
    } catch (err) {
      formStatus.textContent = "⚠️ Network error. Please check your connection.";
    } finally {
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Message";
    }
  });
}

// Close modal
const closeModal = document.getElementById("closeModal");
const successModal = document.getElementById("successModal");

if (closeModal && successModal) {
  closeModal.addEventListener("click", () => {
    successModal.classList.remove("show");
  });

  // close when clicking outside box
  successModal.addEventListener("click", (e) => {
    if (e.target === successModal) {
      successModal.classList.remove("show");
    }
  });
}

// Scroll progress
const scrollProgress = document.getElementById("scrollProgress");

if (scrollProgress) {
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const percent = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = percent + "%";
  });
}