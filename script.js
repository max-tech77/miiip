// Page navigation
function goToPage(pageNumber) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => page.classList.remove("active"));

  const target = document.getElementById("page" + pageNumber);
  if (target) {
    target.classList.add("active");
    window.scrollTo(0, 0); // safety
  }
}

// Cat reveal (page 2)
function showCat() {
  const catBox = document.getElementById("catBox");
  if (catBox.classList.contains("hidden")) {
    catBox.classList.remove("hidden");
    catBox.style.animation = "fade 0.5s ease";
  }
}

// Envelope toggle (page 3)
function toggleEnvelope(envelope) {
  envelope.classList.toggle("open");
}
