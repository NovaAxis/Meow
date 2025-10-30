/* ====== SMOOTH SCROLL & ANIMATIONS ====== */
document.addEventListener("DOMContentLoaded", () => {
  const fadeElems = document.querySelectorAll(".feature, .version-card, .cmp-table");
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.15 });

  fadeElems.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

/* ====== TILE BACKGROUND EFFECT ====== */
const tiles = document.getElementById("tiles");
if (tiles) {
  let tileCountX = Math.ceil(window.innerWidth / 60);
  let tileCountY = Math.ceil(window.innerHeight / 60);

  for (let y = 0; y < tileCountY; y++) {
    for (let x = 0; x < tileCountX; x++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tiles.appendChild(tile);
    }
  }

  document.querySelectorAll(".tile").forEach(tile => {
    tile.style.width = "60px";
    tile.style.height = "60px";
    tile.style.float = "left";
  });
}

/* ====== MOUSE GLOW ====== */
const glow = document.querySelector(".edge-glow");
document.addEventListener("mousemove", e => {
  if (!glow) return;
  glow.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(255,77,196,0.3), transparent 70%)`;
});

/* ====== FLYING CATS 🐱 ====== */
const flyingLayer = document.getElementById("flyingLayer");
const catImages = [
  "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  "https://cdn-icons-png.flaticon.com/512/616/616430.png",
  "https://cdn-icons-png.flaticon.com/512/616/616408.png"
];

function spawnCat() {
  if (!flyingLayer) return;
  const cat = document.createElement("img");
  cat.src = catImages[Math.floor(Math.random() * catImages.length)];
  cat.style.left = `${Math.random() * window.innerWidth}px`;
  cat.style.top = `${Math.random() * window.innerHeight}px`;
  cat.style.opacity = "0.8";
  cat.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`;

  flyingLayer.appendChild(cat);
  setTimeout(() => flyingLayer.removeChild(cat), 8000);
}

setInterval(spawnCat, 4000);

/* ====== DOWNLOAD BUTTON EFFECT ====== */
const downloadBtn = document.getElementById("downloadBtn");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    downloadBtn.textContent = "Downloading...";
    setTimeout(() => (downloadBtn.textContent = "Download Meow"), 2500);
  });
}

/* ====== SCROLL TO ANCHORS ====== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});
