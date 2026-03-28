
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".animate").forEach(el => {
  observer.observe(el);
});

















document.getElementById("menu-toggle").addEventListener("click", function(){
  document.getElementById("nav-menu").classList.toggle("active");
});













window.addEventListener("load", function(){

  let slides = document.querySelectorAll(".rc-hero-slider img");
  let index = 0;

  if(slides.length === 0) return; // safety check

  slides[0].classList.add("active");

  function changeSlide(){

    slides[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");

  }

  setInterval(changeSlide, 3000);

});














const section = document.querySelector("#turnover");
const fills = document.querySelectorAll(".fill");

function showBars() {
    const trigger = window.innerHeight * 0.8;
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < trigger) {
        fills.forEach(fill => {
            fill.style.width = fill.getAttribute("data-width");
        });
    }
}

window.addEventListener("scroll", showBars);






















const silicone = document.querySelector("#silicone .silicone-container");

function showSilicone() {
    const trigger = window.innerHeight * 0.85;
    const top = silicone.getBoundingClientRect().top;

    if (top < trigger) {
        silicone.classList.add("show");
    }
}

window.addEventListener("scroll", showSilicone);























const japan = document.querySelector("#japan .japan-container");

function showJapan() {
    if (!japan) return;

    const trigger = window.innerHeight * 0.85;
    const top = japan.getBoundingClientRect().top;

    if (top < trigger) {
        japan.classList.add("show");
    }
}

window.addEventListener("scroll", showJapan);

/* run once on load */
showJapan();















const combo = document.querySelector("#combo");

function showCombo() {
    const trigger = window.innerHeight * 0.85;
    const top = combo.getBoundingClientRect().top;

    if (top < trigger) {
        combo.classList.add("show");
    }
}

window.addEventListener("scroll", showCombo);




















const blue = document.querySelector("#blue");

function showBlue() {
    const trigger = window.innerHeight * 0.85;
    const top = blue.getBoundingClientRect().top;

    if (top < trigger) {
        blue.classList.add("show");
    }
}

window.addEventListener("scroll", showBlue);






















const energy = document.querySelector("#energy");

function showEnergy() {
    const trigger = window.innerHeight * 0.85;
    const top = energy.getBoundingClientRect().top;

    if (top < trigger) {
        energy.classList.add("show");
    }
}

window.addEventListener("scroll", showEnergy);











const paint = document.querySelector("#paint");

function showPaint() {
    const trigger = window.innerHeight * 0.85;
    const top = paint.getBoundingClientRect().top;

    if (top < trigger) {
        paint.classList.add("show");
    }
}

window.addEventListener("scroll", showPaint);




















const process = document.querySelector("#process");

function showProcess() {
    const trigger = window.innerHeight * 0.85;
    const top = process.getBoundingClientRect().top;

    if (top < trigger) {
        process.classList.add("show");
    }
}

window.addEventListener("scroll", showProcess);













const assembly = document.querySelector("#assembly");

function showAssembly() {
    const trigger = window.innerHeight * 0.85;
    const top = assembly.getBoundingClientRect().top;

    if (top < trigger) {
        assembly.classList.add("show");
    }
}

window.addEventListener("scroll", showAssembly);
















const keypad = document.querySelector("#keypad");
const thumbs = document.querySelectorAll(".keypad-side img");
const mainImg = document.querySelector(".keypad-main img");

/* SCROLL ANIMATION */
function showKeypad() {
    const trigger = window.innerHeight * 0.85;
    const top = keypad.getBoundingClientRect().top;

    if (top < trigger) {
        keypad.classList.add("show");
    }
}
window.addEventListener("scroll", showKeypad);

/* IMAGE SWITCH */
thumbs.forEach(img => {
    img.addEventListener("click", () => {

        mainImg.src = img.src;

        thumbs.forEach(i => i.classList.remove("active"));
        img.classList.add("active");

    });
});




















const rubber = document.querySelector("#rubber");

function showRubber() {
    const trigger = window.innerHeight * 0.85;
    const top = rubber.getBoundingClientRect().top;

    if (top < trigger) {
        rubber.classList.add("show");
    }
}

window.addEventListener("scroll", showRubber);














(function(){

    const spSection = document.getElementById("sp-section");

    function spShowOnScroll() {
        const trigger = window.innerHeight * 0.85;
        const top = spSection.getBoundingClientRect().top;

        if (top < trigger) {
            spSection.classList.add("sp-show");
        }
    }

    window.addEventListener("scroll", spShowOnScroll);

})();












const certSection = document.querySelector(".cert-section");

window.addEventListener("scroll", () => {
  const top = certSection.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {
    certSection.classList.add("show");
  }
});