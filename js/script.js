
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