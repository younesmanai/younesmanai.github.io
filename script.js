
let container = document.querySelector(".container");
let title     = document.querySelector("h1");
let b1        = document.querySelector(".box1");
let b2        = document.querySelector(".box2");
let b3        = document.querySelector(".box3");

// BOUTONS //
let btn       = document.querySelector(".btn");
let btnBack   = document.querySelector(".btn-md");
let btnMd     = document.querySelector(".btnMd");

// MENU //
let menuItems = document.querySelector(".item");

// IMAGES //
let vignette  = document.querySelectorAll(".vignette");




// MENU //

gsap.from(".item ,.item1, .item2", {opacity: 0, duration: 5, delay: 1});



// MAX-WIDTH (360px) //
let containerMd = document.querySelector(".container-md");
let h1Md        = document.querySelector("h1-md");
let box1Md      = document.querySelector(".box1-md");
let box2Md      = document.querySelector(".box2-md");
let box3Md      = document.querySelector(".box3-md");
// BUTTON //
let button = document.querySelector(".btn-md");


// ANIMATIONS 
// box3Md.addEventListener("click", () => {
//   gsap.to(box3Md, {keyframes: [
//           {duration: 0.5, width: 30},
//           {duration: 0.3, x: 30, delay: 0.1}, 
//           {duration: 0.5, y: -130},
//           {duration: 0.5, height: 350, width: 270}, 

//           ]});

//   gsap.to(box1Md, {width: 30, x:-150, duration: 0.7});
//   gsap.to(box2Md, {width: 30, x:-150, duration: 0.7});
//   gsap.to(btnBack,  {opacity: 1, duration: 1.5, delay: 3});

// });


// BUTTON RETOUR //
// btnBack.addEventListener("click", () => {
//   gsap.to(box3Md, {keyframes: [
//           {duration: 0.5, height: 25}, 
//           // {duration: 0.8, width: 200},
//           {duration: 0.5, x: 0}, 
//           {duration: 0.5, y: 0},
//           {duration: 0.5, width: 300,},
  
//         ]});

//   gsap.to(btnBack, {duration: 1.3, opacity: 0});
               
//   gsap.to(box1Md, {width: 300, x: 0, duration: 1, delay: 2});
//   gsap.to(box2Md, {width: 300, x: 0, duration: 1, delay: 2});

// });


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

// FLACONS //
const guerlain = document.querySelector(".guerlain");
const bottega  = document.querySelector(".bottega");
const hedonist  = document.querySelector(".hedonist");
const collectionTitle = document.querySelector(".tech-h3");
const up = document.querySelector(".up");
const principalTitle = document.querySelector(".tech-h3");

// PARFUMS PICTURES PULSE //
guerlain.classList.add("pulse-parfums");
hedonist.classList.add("pulse-parfums");
bottega.classList.add("pulse-parfums");


guerlain.addEventListener("click", () => {
  gsap.to(guerlain, {duration: 1, x: -20, y: -80, width: 90, ease: "power2"});
  gsap.to(bottega,  {duration: 1, x: -30, y: 160, width: 240, ease: "power2"});
  gsap.to(hedonist, {duration: 1, x: 220, y: 10, width: 80,  ease: "power2"});
  gsap.to(collectionTitle, {duration: 1, color: "#70d6ff",  ease: "power2"});
  gsap.to(up, {duration: 1, color: "#70d6ff",  ease: "power2"});
  gsap.to(description, {duration: 1, opacity: 1, color: "#70d6ff", ease: "power2"});




  description.addEventListener("click", () => {


      gsap.to(descriptionContent, {duration: 1, opacity: 1, width: 270, height: 550, ease: "power2"});
      gsap.to(guerlain,  {duration: 1, x: 130, y: 290, width: 70, ease: "power2"});
      gsap.to(hedonist, {duration: 1, x: 270, y: -80, width: 60,  ease: "power2"});
      gsap.to(bottega,  {duration: 1, x: -280, y: -80, width: 50, ease: "power2"});
      gsap.to(description, {duration: 1, opacity: 0, color: "#70d6ff", ease: "power2"});
      gsap.to(collectionTitle, {duration: 1, color: "#70d6ff", scale: 0.5,  ease: "power2"});
});



  
});

bottega.addEventListener("click", () => {
  gsap.to(bottega, {duration: 1, x: -250, y: 0, width: 90, ease: "power2"});
  gsap.to(hedonist,  {duration: 1, x: 50, y: 160, width: 240, ease: "power2"});
  gsap.to(guerlain, {duration: 1, x: 220, y: -80, width: 80,  ease: "power2"});
  gsap.to(collectionTitle, {duration: 1, color: "#f9b702",  ease: "power2"});
  gsap.to(up, {duration: 1, color: "#f9b702",  ease: "power2"});
  gsap.to(description, {duration: 1, opacity: 1, color: "#f9b702", ease: "power2"});

  descriptionB.addEventListener("click", () => {
      gsap.to(descriptionContentH, {duration: 1, opacity: 1, width: 150, height: 200, ease: "power2"}).

      gsap.to(guerlain,  {duration: 1, x: 0, y: 110, width: 70, ease: "power2"});
      gsap.to(hedonist, {duration: 1, x: 0, y: -60, width: 50, ease: "power2"});
      gsap.to(bottega, {duration: 1, x: 0, y: -50, width: 50, ease: "power2"});
});
  
});


hedonist.addEventListener("click", () => {
  gsap.to(hedonist, {duration: 1, x: 0, y: 0, width: 90, ease: "power2"});
  gsap.to(guerlain,  {duration: 1, x: 0, y: 20, width: 260, ease: "power2"});
  gsap.to(bottega, {duration: 1, x: 0, y: 10, width: 80,  ease: "power2"});
  gsap.to(collectionTitle, {duration: 1, color: "#d8a3ff",  ease: "power2"});
  gsap.to(up, {duration: 1, color: "#d8a3ff",  ease: "power2"});
  gsap.to(description, {duration: 1, opacity: 1, color: "#d8a3ff", ease: "power2"});

  descriptionH.addEventListener("click", () => {

      gsap.to(descriptionContentG, {duration: 1, scale: 1, opacity: 1, width: 350, y: 50, ease: "power1"});

      gsap.to(guerlain,  {duration: 1, x: 130, y: 310, width: 70, ease: "power2"});
      gsap.to(hedonist, {duration: 1, x: 0, y: -60, width: 50, ease: "power2"});
      gsap.to(bottega, {duration: 1, x: 0, y: -50, width: 50, ease: "power2"});

      gsap.to(descriptionG, {duration: 1, scale: 0});

});

  
});




// CLOSE BUTTON DESCRIPTION //
const close = document.querySelector(".close"); 

close.addEventListener("click", () => {
      gsap.to(descriptionContent, { duration: 0.5, scale: 0, opacity: 0});
      // gsap.to(descriptionG, {duration: 1, opacity: 1, color: "#70d6ff", ease: "power2"});
      
});



// CIBLAGE DES ARROWS DESCRIPTION //
const description = document.querySelector(".container-arrows-g");
// const descriptionG = document.querySelector(".container-arrows-g");


const descriptionContent = document.querySelector(".description-content");
const descriptionContentH = document.querySelector(".description-content-h");
const descriptionContentB = document.querySelector(".description-content-b");
const descriptionContentG = document.querySelector(".description-content");


// SECLECTION BUTTON ANIMATION //
gsap.to(".container-arrows-g .fa-angle-up", { y: -15,  duration: 0.7, opacity: 1, stagger: 0.3, repeat: -1, ease: "power1"});


// ***************//
// FOOD'S SECTION //
// ***************//
let oreos             = document.querySelector(".img-oreos");
let coffees             = document.querySelector(".img-coffees");
let cookies             = document.querySelector(".img-cookies");

let oreosH2           = document.querySelector(".oreos-h2");
let bgFoods           = document.querySelector(".bg-foods");

let validate           = document.querySelector(".validate");

// FOODY'S PICTURES ANIMATIONS
oreos.classList.add("pulse");
coffees.classList.add("pulse");
cookies.classList.add("pulse");



// OREO'S PICTURE CLICK //
oreos.addEventListener("click", () => {
   gsap.to(".principal-title", { duration: 0.8, color: "#af7603" });

   gsap.to(oreos, { duration: 0.5, x: 130, y: 80, scale: 4});
   gsap.to(oreosH2, { duration: 0.5, opacity: 1, x: 15, y: -25, scale: 0.7});

   gsap.to(".img-cookies", { duration: 0.5, opacity: 0, x: -100});
   gsap.to(".img-coffees", { duration: 0.5, opacity: 0, x: 100,});
   gsap.to(".oreos-descriptions", {duration: 0.5, scale: 0.3, x: -85, y: -50});
   
   gsap.to(validate, { duration: 0.5, opacity: 1, x: 150, y: 210, scale: 1});
   bgFoods.classList.add("blur");

   oreos.classList.remove("pulse");

});

validate.addEventListener("click", () => {
  gsap.to(".principal-title", { duration: 0.3, color: "#000" });
   gsap.to(oreosH2, { duration: 0.5, opacity: 0, scale: 0 });

   gsap.to(oreos, { duration: 0.5, y: 0, x: -50, scale: 1});
   gsap.to(".img-cookies", { duration: 0.5, opacity: 1, x: 0});
   gsap.to(".img-coffees", { duration: 0.5, opacity: 1, x: 0});

   gsap.to(".oreos-descriptions", {scale: 0});
  
   
   gsap.to(validate, { duration: 0.5, opacity: 0, scale: 0});

   bgFoods.classList.remove("blur");
   // oreos.classList.add("pulse");

});

// COOKIES PICTURE CLICK //
cookies.addEventListener("click", () => {
   // gsap.to(".principal-title", { duration: 0.8, color: "#af7603" });

   gsap.to(cookies, { duration: 0.5, x: 110, y: 280, scale: 3});
   gsap.to(".cookies-h2", { duration: 0.5, opacity: 1, x: 15, y: -25, scale: 0.7});

   gsap.to(oreos, { duration: 0.5, opacity: 0, x: -100});
   gsap.to(".img-coffees", { duration: 0.5, opacity: 0});
   gsap.to(".cookies-descriptions", {duration: 0.5, scale: 0.4, x: -80, y: -50});
   
   gsap.to(validate, { duration: 0.5, opacity: 1, x: 170, y: 210, scale: 1});
   bgFoods.classList.add("blur");

   cookies.classList.remove("pulse");

});

validate.addEventListener("click", () => {
  // gsap.to(".principal-title", { duration: 0.3, color: "#000" });
   // gsap.to(".cookies-h2", { duration: 0.5, x: 0, y: 0, opacity: 0, scale: 0 });
   gsap.to(cookies, { duration: 0.5, x: 0, y: 0, scale: 1});

   gsap.to(oreos, { duration: 0.5, opacity: 1, x: 0});
   gsap.to(".img-coffees", { duration: 0.5, opacity: 1});
   gsap.to(".cookies-descriptions", {duration: 0.5, scale: 0});

   // cookies.classList.add("pulse");

   
   // gsap.to(validate, { duration: 0.5, opacity: 0, scale: 0});

   // bgFoods.classList.remove("blur");
   // cookies.classList.add("pulse");

});


  //******//
 //768 px//
//******//

installMediaQueryWatcher("(min-width: 360px)", function(matches) {
  
  if (matches) {

      // ANIMATIONS 
box3Md.addEventListener("click", () => {
  gsap.to(box3Md, {keyframes: [
          {duration: 0.5, width: 30},
          {duration: 0.3, x: 30, delay: 0.1}, 
          {duration: 0.5, y: -130},
          {duration: 0.5, height: 350, width: 270}, 

          ]});

  gsap.to(box1Md, {width: 30, x:-150, duration: 0.7});
  gsap.to(box2Md, {width: 30, x:-150, duration: 0.7});
  gsap.to(btnBack,  {opacity: 1, duration: 1.5, delay: 3});

});

// BUTTON RETOUR //
btnBack.addEventListener("click", () => {
  gsap.to(box3Md, {keyframes: [
          {duration: 0.5, height: 25}, 
          // {duration: 0.8, width: 200},
          {duration: 0.5, x: 0}, 
          {duration: 0.5, y: 0},
          {duration: 0.5, width: 300,},
  
        ]});

  gsap.to(btnBack, {duration: 1.3, opacity: 0});
               
  gsap.to(box1Md, {width: 300, x: 0, duration: 1, delay: 2});
  gsap.to(box2Md, {width: 300, x: 0, duration: 1, delay: 2});

});


    
    } else {
    
    // TweenMax.to(".red", 1, { x: 0 });
    // TweenMax.to(".blue", 1, { x: 200 });
  }
});

installMediaQueryWatcher("(min-width: 768px)", function(matches) {
  
  if (matches) {

      // ANIMATIONS 
box3Md.addEventListener("click", () => {
  gsap.to(box3Md, {keyframes: [
          {duration: 0.5, width: 30},
          {duration: 0.3, x: 30, delay: 0.1}, 
          {duration: 0.5, y: 0},
          {duration: 0.5, height: 850, width: 550}, 

          ]});

  gsap.to(box1Md, {width: 30, x: 80, y: -100, duration: 0.7, stagger: 0.5});
  gsap.to(box2Md, {width: 30, x: 20, y: -50, duration: 0.7, stagger: 0.5});
  gsap.to(btnBack,  {opacity: 1, duration: 1.5, delay: 3});

});

// BUTTON RETOUR //
btnBack.addEventListener("click", () => {
  gsap.to(box3Md, {keyframes: [
          {duration: 0.5, height: 25}, 
          // {duration: 0.8, width: 200},
          {duration: 0.5, x: -230}, 
          {duration: 0.5, y: 0},
          {duration: 0.5, width: 200,},
  
        ]});

  gsap.to(btnBack, {duration: 1.3, opacity: 0});
               
  gsap.to(box1Md, {width: 200, x: 230, duration: 1, delay: 2});
  gsap.to(box2Md, {width: 200, x: 0, duration: 1, delay: 2});

});
    
    } else {
    
    // TweenMax.to(".red", 1, { x: 0 });
    // TweenMax.to(".blue", 1, { x: 200 });
  }
});

function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
  var mql = window.matchMedia(mediaQuery);
  mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
  layoutChangedCallback(mql.matches);
}


