// ===============================
// Ferreagro Palmarito - script.js
// ===============================

// Confirmación en consola
console.log("Sitio cargado correctamente 🚀");

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener("click", function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) destino.scrollIntoView({ behavior: "smooth" });
  });
});

// Animaciones reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) el.classList.add('active');
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Carrusel (si existiera)
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.flecha.izquierda');
const nextBtn = document.querySelector('.flecha.derecha');
let currentIndex = 0;
let autoPlay = null;
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}
function nextSlide() { currentIndex = (currentIndex + 1) % slides.length; showSlide(currentIndex); }
function prevSlide() { currentIndex = (currentIndex - 1 + slides.length) % slides.length; showSlide(currentIndex); }
if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => { nextSlide(); resetAutoPlay(); });
  prevBtn.addEventListener('click', () => { prevSlide(); resetAutoPlay(); });
}
function resetAutoPlay() { clearInterval(autoPlay); autoPlay = setInterval(nextSlide, 4000); }
if (slides.length > 0) { showSlide(currentIndex); autoPlay = setInterval(nextSlide, 4000); }

// Botón CTA pulsado
const ctaButton = document.querySelector('.cta-boton');
if (ctaButton) {
  ctaButton.addEventListener('mousedown', () => {
    ctaButton.style.transform = "scale(0.96)";
    cta