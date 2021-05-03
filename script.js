let container = document.querySelector(".container");
let title = document.querySelector("h1");
let b1 = document.querySelector(".box1");
let b2 = document.querySelector(".box2");
let b3 = document.querySelector(".box3");

// BOUTONS //
let btn = document.querySelector(".btn");
let btnBack = document.querySelector(".btn1");
let btnMd = document.querySelector(".btnMd");
// MENU //
let menu = document.querySelector(".menu");
let menuItems = document.querySelector(".item");
// IMAGES //
let vignette = document.querySelectorAll(".vignette");




btn.addEventListener("click", () => {
  gsap.to(title, {opacity: 1, x: -350, y: -90, scale: 1.5, duration: 1, ease: "power1"});
  
  gsap.to(b1, {y: -120, duration: 1, ease: "power1"});
  gsap.to(b2, {x: -130, duration: 1, ease: "power1"});

  gsap.to(b3, {keyframes: [
  							{duration: 0.8, x: 560},
    						{duration: 0.8, y: -140},
    						{duration: 0.8, scale: 4}
  							]});
  gsap.to(vignette, {opacity: 1, duration: 1, delay: 1.5});

  gsap.to(btn, {opacity: 0, duration: 1.8});
  gsap.to(btnBack, {opacity: 1, duration: 1.8, delay: 1.8});
})


btnBack.addEventListener("click", () => {
  gsap.to(title, {opacity: 1, x: 0, y: 0, scale: 1,duration: 1.3});
  
  gsap.to(b1, {y: 0, duration: 1, ease: "power1"});
  gsap.to(b2, {x: 0, duration: 1, ease: "power1"});

  gsap.to(b3, {keyframes: [
  							{duration: 0.8, scale: 1},
  							{duration: 0.8, y: 0},
  							{duration: 0.8, x: 0}
  							]});
  gsap.to(vignette, {opacity: 0, duration: 0.2});

  gsap.to(btn, {opacity: 1, duration: 1, delay: 1.8});
  gsap.to(btnBack, {opacity: 0, duration: 1.8, delay: 0.2});
})


// MAX-WIDTH(768PX)
b3.addEventListener("click", () => {
  b3.classList.toggle("moveB3");
  b3.classList.toggle("move1");

});

b2.addEventListener("click", () => {
  b2.classList.toggle("moveB2");
  b2.classList.toggle("move1");

  b3.classList.toggle("noMove");
  b1.classList.toggle("noMove");
  // gsap.to(b2, {y: 30});
  // gsap.to(b3, {y: -33});


  // gsap.to(b3, {height: 100});
  // gsap.to(b2, {height: 500});
  // gsap.to(b1, {height: 100});
});


b1.addEventListener("click", () => {
  b1.classList.toggle("moveB1");
  b1.classList.toggle("move1");

  b3.classList.toggle("noMove");
  b2.classList.toggle("noMove");
  // gsap.to(b3, {height: 100});
  // gsap.to(b2, {height: 100});
  // gsap.to(b1, {height: 500});
});



// MENU //
gsap.fromTo(menu, {y: -120, opacity: 0}, 
                  {y: 3, opacity: 1, duration: 1.5});
gsap.from(".item ,.item1, .item2", {opacity: 0, duration: 5, delay: 2});



// MAX-WIDTH (360px) //
let containerMd = document.querySelector(".container-md");
let h1Md        = document.querySelector("h1-md");
let box1Md      = document.querySelector(".box1-md");
let box2Md      = document.querySelector(".box2-md");
let box3Md      = document.querySelector(".box3-md");
// BUTTON //
let button = document.querySelector(".btn-md");


// ANIMATIONS 
box3Md.addEventListener("click", () => {
  gsap.to(box3Md, {keyframes: [
          {duration: 0.5, width: 30},
          {duration: 0.5, x: 30}, 
          {duration: 0.6, y: -130},
          {duration: 0.8, height: 350, width: 270}, 
          
    ]});

  // gsap.to(h1Md, {scale: 2});
  gsap.to(box1Md, {width: 30, x:-150, duration: 0.7});
  gsap.to(box2Md, {width: 30, x:-150, duration: 0.7});
  gsap.to(button,  {opacity: 1, duration: 1.5, delay: 3});

});


// BUTTON RETOUR //
button.addEventListener("click", () => {
  gsap.to(box3Md, {keyframes: [
          {duration: 0.5, height: 25}, 
          // {duration: 0.8, width: 200},
          {duration: 0.8, x: 0, delay: 0.3}, 
          {duration: 0.7, y: 0},
          {duration: 0.8, width: 300, delay: 0.3}
          
          
    ]});

  gsap.to(box1Md, {width: 300, x: 0, duration: 1, delay: 2});
  gsap.to(box2Md, {width: 300, x: 0, duration: 1, delay: 2});
  gsap.to(button,  {opacity: 1, duration: 1.5, delay: 3});

});


// ********************************
// CARDS
//*********************************
gsap.to(".cards-md .img-tech", {
          duration: 1,
          y: -20,
          scale: 2,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: ".cards-md .img-tech",
            
            start: "top 75%", 
            end: "bottom 80%",
            toggleActions: "play pause pause reverse",

            scrub: 1
          }
});
// TITLE CATRD PRODUCT 1 //
gsap.to(".tech-h2", {
          duration: 1.5,
          opacity: 1,
          autoAlpha: 1,
          scrollTrigger: {

            trigger: ".cards-md .img-tech",

            start: "top 75%", 
            end: "bottom 80%",
            toggleActions: "play pause pause reverse",

            scrub: 1
      }
});

gsap.to(".parfums", {
          duration: 1,
          scale: 1,
          autoAlpha: 1,

          scrollTrigger: {
            trigger: ".cards-md .img-tech",
            // markers: true,
            start: "top 10%", 
            end: "bottom 80%",
            toggleActions: "play pause pause reverse",

            scrub: 1
          }
});


// CIRCLES //
gsap.to(".circle-1", {
          duration: 0.5,
          x: -95,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: ".cards-md .img-tech",

            start: "top 75%", 
            end: "bottom 80%",
            toggleActions: "play pause pause reverse",

            scrub: 1
      }
});

gsap.to(".circle-2", {
          duration: 0.5,
          x: 120,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: ".cards-md .img-tech",

            start: "top 75%", 
            end: "bottom 80%",
            toggleActions: "play pause pause reverse",

            scrub: 1
      }
});
gsap.to(".circle-3", {
          duration: 0.5,
          x: -105,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: ".cards-md .img-tech",

            start: "top 75%", 
            end: "bottom 80%",
            toggleActions: "play pause pause reverse",

            scrub: 1
      }
});

 ScrollTrigger.create({
      trigger: ".cards-md",
      pin: true,
      // markers: true,
      end: "bottom 0%"
 });

// PAIEMENT
 const pay = document.querySelector(".btn-parfum");
 const btnConfirm = document.querySelector(".btn-confirm");
 const confirMessage = document.querySelector(".success");


pay.addEventListener("click", () => {
  gsap.to(".pay-form", {duration: 1, scale: (1), ease: "power2"});
  gsap.to(pay, { duration: 1, opacity: 0});
  gsap.to(btnConfirm, { duration: 1, delay: 0.5, scale: 1});

});

btnConfirm.addEventListener("click", () => {
  gsap.to(".pay-form", {duration: 1, scale: (0), ease: "power2"});
  gsap.to(".success", {keyframes: [
                {delay: 1},
                {duration: 1},
                {scale: 1},
                {duration: 2},
                {ease: "power2"},
                {scale: 0},
                {opacity: 0}

    ]});
  
});

// TEST FLACONS //
const guerlain = document.querySelector(".guerlain");
const bottega  = document.querySelector(".bottega");
const hedonist  = document.querySelector(".hedonist");
const collectionTitle = document.querySelector(".tech-h3");
const up = document.querySelector(".up");
const principalTitle = document.querySelector(".tech-h3");



guerlain.addEventListener("click", () => {
  gsap.to(guerlain, {duration: 1, x: -20, y: -80, width: 90, ease: "power2"});
  gsap.to(bottega,  {duration: 1, x: -30, y: 160, width: 240, ease: "power2"});
  gsap.to(hedonist, {duration: 1, x: 220, y: 10, width: 80,  ease: "power2"});
  gsap.to(collectionTitle, {duration: 1, color: "#f3a0f7",  ease: "power2"});
  gsap.to(up, {duration: 1, color: "#f3a0f7",  ease: "power2"});
  gsap.to(descriptionG, {duration: 1, opacity: 0,  ease: "power2"});

  description.addEventListener("click", () => {


      gsap.to(descriptionContent, {duration: 1, opacity: 1, width: 270, height: 550, ease: "power2"});
      gsap.to(guerlain,  {duration: 1, x: 260, y: -130, ease: "power2"});
      gsap.to(hedonist, {duration: 1, x: 270, y: 50, width: 80,  ease: "power2"});
      gsap.to(bottega,  {duration: 1, x: -280, y: -50, width: 50, ease: "power2"});
});



  
});

bottega.addEventListener("click", () => {
  gsap.to(bottega, {duration: 1, x: -250, y: 0, width: 90, ease: "power2"});
  gsap.to(hedonist,  {duration: 1, x: 50, y: 160, width: 240, ease: "power2"});
  gsap.to(guerlain, {duration: 1, x: 220, y: -80, width: 80,  ease: "power2"});
  gsap.to(collectionTitle, {duration: 1, color: "#f9b702",  ease: "power2"});
  gsap.to(up, {duration: 1, color: "#f9b702",  ease: "power2"});
  gsap.to(description, {duration: 1, color: "#f9b702",  ease: "power2"});

  description.addEventListener("click", () => {
      gsap.to(descriptionContentH, {duration: 1, opacity: 1, width: 150, height: 200, ease: "power2"})
});
  
});


hedonist.addEventListener("click", () => {
  gsap.to(hedonist, {duration: 1, x: 0, y: 0, width: 90, ease: "power2"});
  gsap.to(guerlain,  {duration: 1, x: 40, y: 50, width: 260, ease: "power2"});
  gsap.to(bottega, {duration: 1, x: 0, y: 10, width: 80,  ease: "power2"});
  gsap.to(collectionTitle, {duration: 1, color: "#d8a3ff",  ease: "power2"});
  gsap.to(up, {duration: 1, color: "#d8a3ff",  ease: "power2"});
  gsap.to(descriptionG, {duration: 1, opacity: 1, color: "#d8a3ff", ease: "power2"});

  descriptionG.addEventListener("click", () => {
      gsap.to(principalTitle, {duration: 1,  scale: 0.7, y: -20, color: "#f9c945",  ease: "power2"});

      gsap.to(descriptionContentG, {duration: 1, scale: 1, opacity: 1, width: 350, y: 50, ease: "power1"});

      gsap.to(guerlain,  {duration: 1, x: 130, y: 310, width: 70, ease: "power2"});
      gsap.to(hedonist, {duration: 1, x: 0, y: -60, width: 50, ease: "power2"});
      gsap.to(bottega, {duration: 1, x: 0, y: -50, width: 50, ease: "power2"});

      gsap.to(descriptionG, {duration: 1, scale: 0});

});

  
});




// CLOSE DESCRIPTION //
const close = document.querySelector(".close"); 

close.addEventListener("click", () => {
      gsap.to(descriptionContent, { duration: 0.5, scale: 0, opacity: 0});
});



// DESCRIPTION HEDONIST //
// const description = document.querySelector(".description");
const descriptionG = document.querySelector(".container-arrows");


const descriptionContent = document.querySelector(".description-content");
const descriptionContentH = document.querySelector(".description-content-h");
const descriptionContentB = document.querySelector(".description-content-b");
const descriptionContentG = document.querySelector(".description-content");


// SECLECTION BUTTON ANIMATION //
gsap.to(".container-arrows .fa-angle-up", { y: -15,  duration: 0.7, opacity: 1, stagger: 0.3, repeat: -1, ease: "power1"});























// SIGNATURE
 var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 7500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: false
});