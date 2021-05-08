


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
      // pin: true,
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




// guerlain.addEventListener("click", () => {
//   gsap.to(guerlain, {duration: 1, x: -20, y: -80, width: 90, ease: "power2"});
//   gsap.to(bottega,  {duration: 1, x: -30, y: 160, width: 240, ease: "power2"});
//   gsap.to(hedonist, {duration: 1, x: 220, y: 10, width: 80,  ease: "power2"});
//   gsap.to(collectionTitle, {duration: 1, color: "#70d6ff",  ease: "power2"});
//   gsap.to(up, {duration: 1, color: "#70d6ff",  ease: "power2"});
//   gsap.to(description, {duration: 1, opacity: 1, color: "#70d6ff", ease: "power2"});

//   description.addEventListener("click", () => {


//       gsap.to(descriptionContent, {duration: 1, opacity: 1, width: 270, height: 550, ease: "power2"});
//       gsap.to(guerlain,  {duration: 1, x: 130, y: 290, width: 70, ease: "power2"});
//       gsap.to(hedonist, {duration: 1, x: 270, y: -80, width: 60,  ease: "power2"});
//       gsap.to(bottega,  {duration: 1, x: -280, y: -80, width: 50, ease: "power2"});
//       gsap.to(description, {duration: 1, opacity: 0, color: "#70d6ff", ease: "power2"});
//       gsap.to(collectionTitle, {duration: 1, color: "#70d6ff", scale: 0.5,  ease: "power2"});
// });

  
// });




// bottega.addEventListener("click", () => {
//   gsap.to(bottega, {duration: 1, x: -250, y: 0, width: 90, ease: "power2"});
//   gsap.to(hedonist,  {duration: 1, x: 50, y: 160, width: 240, ease: "power2"});
//   gsap.to(guerlain, {duration: 1, x: 220, y: -80, width: 80,  ease: "power2"});
//   gsap.to(collectionTitle, {duration: 1, color: "#f9b702",  ease: "power2"});
//   gsap.to(up, {duration: 1, color: "#f9b702",  ease: "power2"});
//   gsap.to(description, {duration: 1, opacity: 1, color: "#f9b702", ease: "power2"});

//   descriptionB.addEventListener("click", () => {
//       gsap.to(descriptionContentH, {duration: 1, opacity: 1, width: 150, height: 200, ease: "power2"}).

//       gsap.to(guerlain,  {duration: 1, x: 0, y: 110, width: 70, ease: "power2"});
//       gsap.to(hedonist, {duration: 1, x: 0, y: -60, width: 50, ease: "power2"});
//       gsap.to(bottega, {duration: 1, x: 0, y: -50, width: 50, ease: "power2"});
// });
  
// });


// hedonist.addEventListener("click", () => {
//   gsap.to(hedonist, {duration: 1, x: 0, y: 0, width: 90, ease: "power2"});
//   gsap.to(guerlain,  {duration: 1, x: 0, y: 20, width: 260, ease: "power2"});
//   gsap.to(bottega, {duration: 1, x: 0, y: 10, width: 80,  ease: "power2"});
//   gsap.to(collectionTitle, {duration: 1, color: "#d8a3ff",  ease: "power2"});
//   gsap.to(up, {duration: 1, color: "#d8a3ff",  ease: "power2"});
//   gsap.to(description, {duration: 1, opacity: 1, color: "#d8a3ff", ease: "power2"});

//   descriptionH.addEventListener("click", () => {

//       gsap.to(descriptionContentG, {duration: 1, scale: 1, opacity: 1, width: 350, y: 50, ease: "power1"});

//       gsap.to(guerlain,  {duration: 1, x: 130, y: 310, width: 70, ease: "power2"});
//       gsap.to(hedonist, {duration: 1, x: 0, y: -60, width: 50, ease: "power2"});
//       gsap.to(bottega, {duration: 1, x: 0, y: -50, width: 50, ease: "power2"});

//       gsap.to(descriptionG, {duration: 1, scale: 0});

// });
 
// });




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
let muffins             = document.querySelector(".img-muffins");
let macarons             = document.querySelector(".img-macarons");
let profiteroles             = document.querySelector(".img-profiteroles");

let oreosH2           = document.querySelector(".oreos-h2");
let bgFoods           = document.querySelector(".bg-foods");

let validate           = document.querySelector(".validate");

// // FOODY'S PICTURES ANIMATIONS
// oreos.classList.add("pulse");
// coffees.classList.add("pulse");
// cookies.classList.add("pulse");



// // OREO'S PICTURE CLICK //
// oreos.addEventListener("click", () => {
//    gsap.to(".principal-title", { duration: 0.8, color: "#af7603" });

//    gsap.to(oreos, { duration: 0.5, x: 130, y: 80, scale: 4});
//    gsap.to(oreosH2, { duration: 0.5, opacity: 1, x: 15, y: -25, scale: 0.7});

//    gsap.to(".img-cookies", { duration: 0.5, opacity: 0, x: -100});
//    gsap.to(".img-coffees", { duration: 0.5, opacity: 0, x: 100,});
//    gsap.to(".oreos-descriptions", {duration: 0.5, scale: 0.3, x: -85, y: -50});
   
//    gsap.to(validate, { duration: 0.5, opacity: 1, x: 150, y: 210, scale: 1});
//    bgFoods.classList.add("blur");

   

// });

// validate.addEventListener("click", () => {
//   gsap.to(".principal-title", { duration: 0.3, color: "#000" });
//    gsap.to(oreosH2, { duration: 0.5, opacity: 0, scale: 0 });

//    gsap.to(oreos, { duration: 0.5, y: 0, x: -50, scale: 1});
//    gsap.to(".img-cookies", { duration: 0.5, opacity: 1, x: 0});
//    gsap.to(".img-coffees", { duration: 0.5, opacity: 1, x: 0});

//    gsap.to(".oreos-descriptions", {scale: 0});
  
   
//    gsap.to(validate, { duration: 0.5, opacity: 0, scale: 0});

//    bgFoods.classList.remove("blur");
   

// });

// // COOKIES PICTURE CLICK //
// cookies.addEventListener("click", () => {
//    // gsap.to(".principal-title", { duration: 0.8, color: "#af7603" });

//    gsap.to(cookies, { duration: 0.5, x: 110, y: 280, scale: 3});
//    gsap.to(".cookies-h2", { duration: 0.5, opacity: 1, x: 15, y: -25, scale: 0.7});

//    gsap.to(oreos, { duration: 0.5, opacity: 0, x: -100});
//    gsap.to(".img-coffees", { duration: 0.5, opacity: 0});
//    gsap.to(".cookies-descriptions", {duration: 0.5, scale: 0.4, x: -80, y: -50});
   
//    gsap.to(validate, { duration: 0.5, opacity: 1, x: 170, y: 210, scale: 1});
//    bgFoods.classList.add("blur");

//    // cookies.classList.remove("pulse");

// });

// validate.addEventListener("click", () => {
//   // gsap.to(".principal-title", { duration: 0.3, color: "#000" });
//    // gsap.to(".cookies-h2", { duration: 0.5, x: 0, y: 0, opacity: 0, scale: 0 });
//    gsap.to(cookies, { duration: 0.5, x: 0, y: 0, scale: 1});

//    gsap.to(oreos, { duration: 0.5, opacity: 1, x: 0});
//    gsap.to(".img-coffees", { duration: 0.5, opacity: 1});
//    gsap.to(".cookies-descriptions", {duration: 0.5, scale: 0});

//    // cookies.classList.add("pulse");

   
//    // gsap.to(validate, { duration: 0.5, opacity: 0, scale: 0});

//    // bgFoods.classList.remove("blur");
//    // cookies.classList.add("pulse");

// });

// //OREO'S PICTURE CLICK //
// oreos.addEventListener("click", () => {
//    gsap.to(".principal-title", { duration: 0.8, color: "#af7603" });

//    gsap.to(oreos, { duration: 0.5, x: 330, y: 80, scale: 2});
//    gsap.to(oreosH2, { duration: 0.5, opacity: 1, x: 15, y: -25, scale: 0.7});

//    gsap.to(".img-cookies", { duration: 0.5, opacity: 0, x: -100});
//    gsap.to(".img-coffees", { duration: 0.5, opacity: 0, x: 100,});
//    gsap.to(".oreos-descriptions", {duration: 0.5, scale: 0.3, x: -85, y: -50});
   
//    gsap.to(validate, { duration: 0.5, opacity: 1, x: 150, y: 210, scale: 1});
//    bgFoods.classList.add("blur");

   

// });

// validate.addEventListener("click", () => {
//   gsap.to(".principal-title", { duration: 0.3, color: "#000" });
//    gsap.to(oreosH2, { duration: 0.5, opacity: 0, scale: 0 });

//    gsap.to(oreos, { duration: 0.5, y: 0, x: -50, scale: 1});
//    gsap.to(".img-cookies", { duration: 0.5, opacity: 1, x: 0});
//    gsap.to(".img-coffees", { duration: 0.5, opacity: 1, x: 0});

//    gsap.to(".oreos-descriptions", {scale: 0});
  
   
//    gsap.to(validate, { duration: 0.5, opacity: 0, scale: 0});

//    bgFoods.classList.remove("blur");
   

// });


  //******//
 //360 px//
//******//

// installMediaQueryWatcher("(min-width: 360px)", function(matches) {
//   let box3Sm      = document.querySelector(".box3-md");
  
//   if (matches) {

// // HOME //


//   gsap.to(box1Md, {width: 30, x:-150, duration: 0.7});
//   gsap.to(box2Md, {width: 30, x:-150, duration: 0.7});
//   gsap.to(btnBack,  {opacity: 1, duration: 1.5, delay: 3});

// });


// // BUTTON RETOUR //
// btnBack.addEventListener("click", () => {
//   gsap.to(box3Md, {keyframes: [
//           {duration: 0.5, height: 25}, 
//           // {duration: 0.8, width: 200},
//           {duration: 0.5, x: 0}, 
//           {duration: 0.5, y: 0},
//           {duration: 0.5, width: 300,},
  
// ]});

//   gsap.to(btnBack, {duration: 1.3, opacity: 0});
               
//   gsap.to(box1Md, {width: 300, x: 0, duration: 1, delay: 2});
//   gsap.to(box2Md, {width: 300, x: 0, duration: 1, delay: 2});

// }); 


  
// // PARFUM GUERLAIN //

//   guerlain.addEventListener("click", () => {
//   gsap.to(guerlain, {duration: 1, x: -50, y: -140, width: 70, ease: "power2"});
//   gsap.to(bottega,  {duration: 1, x: -30, y: 160, width: 240, ease: "power2"});
//   gsap.to(hedonist, {duration: 1, x: 260, y: -10, width: 80,  ease: "power2"});
//   gsap.to(collectionTitle, {duration: 1, color: "#70d6ff",  ease: "power2"});
//   gsap.to(up, {duration: 1, color: "#70d6ff",  ease: "power2"});
//   gsap.to(description, {duration: 1, opacity: 1, color: "#70d6ff", ease: "power2"});

//   description.addEventListener("click", () => {


//       gsap.to(descriptionContent, {duration: 1, opacity: 1, width: 270, height: 350, x: 10, y: 20, ease: "power2"});
//       gsap.to(guerlain,  {duration: 1, x: 130, y: 290, width: 70, ease: "power2"});
//       gsap.to(hedonist, {duration: 1, x: 270, y: -80, width: 60,  ease: "power2"});
//       gsap.to(bottega,  {duration: 1, x: -280, y: -80, width: 50, ease: "power2"});
//       gsap.to(description, {duration: 1, opacity: 0, color: "#70d6ff", ease: "power2"});
//       gsap.to(collectionTitle, {duration: 1, color: "#70d6ff", scale: 0.5,  ease: "power2"});
// });

  
// });

// // PARFUM BOTTEGA //

// bottega.addEventListener("click", () => {
//   gsap.to(bottega, {duration: 1, x: -250, y: 0, width: 90, ease: "power2"});
//   gsap.to(hedonist,  {duration: 1, x: 50, y: 160, width: 240, ease: "power2"});
//   gsap.to(guerlain, {duration: 1, x: 220, y: -120, width: 80,  ease: "power2"});
//   gsap.to(collectionTitle, {duration: 1, color: "#f9b702",  ease: "power2"});
//   gsap.to(up, {duration: 1, color: "#f9b702",  ease: "power2"});
//   gsap.to(description, {duration: 1, opacity: 1, color: "#f9b702", ease: "power2"});

//   descriptionB.addEventListener("click", () => {
//       gsap.to(descriptionContentH, {duration: 1, opacity: 1, width: 150, height: 200, ease: "power2"}).

//       gsap.to(guerlain,  {duration: 1, x: 0, y: 110, width: 70, ease: "power2"});
//       gsap.to(hedonist, {duration: 1, x: 0, y: -60, width: 50, ease: "power2"});
//       gsap.to(bottega, {duration: 1, x: 0, y: -50, width: 50, ease: "power2"});
// });
  
// });

// // PARFUM HEDONIST //

// hedonist.addEventListener("click", () => {
//   gsap.to(hedonist, {duration: 1, x: 0, y: 0, width: 90, ease: "power2"});
//   gsap.to(guerlain,  {duration: 1, x: 0, y: 20, width: 260, ease: "power2"});
//   gsap.to(bottega, {duration: 1, x: 0, y: 10, width: 80,  ease: "power2"});
//   gsap.to(collectionTitle, {duration: 1, color: "#d8a3ff",  ease: "power2"});
//   gsap.to(up, {duration: 1, color: "#d8a3ff",  ease: "power2"});
//   gsap.to(description, {duration: 1, opacity: 1, color: "#d8a3ff", ease: "power2"});

//   descriptionH.addEventListener("click", () => {

//       gsap.to(descriptionContentG, {duration: 1, scale: 1, opacity: 1, width: 350, y: 50, ease: "power1"});

//       gsap.to(guerlain,  {duration: 1, x: 130, y: 310, width: 70, ease: "power2"});
//       gsap.to(hedonist, {duration: 1, x: 0, y: -60, width: 50, ease: "power2"});
//       gsap.to(bottega, {duration: 1, x: 0, y: -50, width: 50, ease: "power2"});

//       gsap.to(descriptionG, {duration: 1, scale: 0});

// });
 
// });


    
//     } 
// });


// installMediaQueryWatcher("(min-width: 768px)", function(matches) {

  
//   if (matches) {

// //HOME //
// box3Md.addEventListener("click", () => {
//   gsap.to(box3Md, {keyframes: [
//           {duration: 0.5, width: 600},
//           {duration: 0.5, x: 100, delay: 0.1}, 
//           {duration: 0.5, y: -130},
//           {duration: 0.5, height: 900, width: 570}, 

//           ]});

//   gsap.to(box1Md, {width: 30, x: 150, duration: 0.7});
//   gsap.to(box2Md, {width: 30, x: 150, duration: 0.7});
//   gsap.to(btnBack,  {opacity: 1, duration: 1.5, delay: 3});

// });


// // BUTTON RETOUR //
// btnBack.addEventListener("click", () => {
//   gsap.to(box3Md, {keyframes: [
//           {duration: 0.5, height: 25}, 
//           // {duration: 0.8, width: 200},
//           {duration: 0.5, x: 0}, 
//           {duration: 0.5, y: 0},
//           {duration: 0.5, width: 500, height: 400},
  
// ]});

//   gsap.to(btnBack, {duration: 1.3, opacity: 0});
               
//   gsap.to(box1Md, {width: 300, x: 0, duration: 1, delay: 2});
//   gsap.to(box2Md, {width: 300, x: 0, duration: 1, delay: 2});

// }); 




// // PARFUM GUERLAIN //
//   guerlain.addEventListener("click", () => {
//   gsap.to(guerlain, {duration: 1, x: -200, y: -250, width: 150,  ease: "power2"});
//   gsap.to(bottega,  {duration: 1, x: -270, y: 250, width: 400, ease: "power2"});
//   gsap.to(hedonist, {duration: 1, x: 550, y: 10, width: 150, ease: "power2"});
//   gsap.to(collectionTitle, {duration: 1, color: "#70d6ff",  ease: "power2"});
//   gsap.to(up, {duration: 1, color: "#70d6ff",  ease: "power2"});
//   gsap.to(description, {duration: 1, opacity: 1, color: "#70d6ff", ease: "power2"});

//   description.addEventListener("click", () => {


//       gsap.to(descriptionContent, {duration: 1, opacity: 1, width: 570, height: 650, x: -130, ease: "power2"});
//       gsap.to(guerlain,  {duration: 1, x: 80, y: 350, width: 120, ease: "power2"});
//       gsap.to(hedonist, {duration: 1, x: 270, y: -80, width: 60,  ease: "power2"});
//       gsap.to(bottega,  {duration: 1, x: -280, y: -80, width: 50, ease: "power2"});
//       gsap.to(description, {duration: 1, opacity: 0, color: "#70d6ff", ease: "power2"});
//       gsap.to(collectionTitle, {duration: 1, color: "#70d6ff", scale: 0.5,  ease: "power2"});
// });

  
// });

// // PARFUM BOTTEGA //

// bottega.addEventListener("click", () => {
//   gsap.to(bottega, {duration: 1, x: -570, y: 0, width: 150, ease: "power2"});
//   gsap.to(hedonist,  {duration: 1, x: 180, y: 220, width: 400,  ease: "power2"});
//   gsap.to(guerlain, {duration: 1, x: 400, y: -260, width: 150,  ease: "power2"});
//   gsap.to(collectionTitle, {duration: 1, color: "#f9b702",  ease: "power2"});
//   gsap.to(up, {duration: 1, color: "#f9b702",  ease: "power2"});
//   gsap.to(description, {duration: 1, opacity: 1, color: "#f9b702", ease: "power2"});

//   descriptionB.addEventListener("click", () => {
//       gsap.to(descriptionContentH, {duration: 1, opacity: 1, width: 150, height: 200, ease: "power2"}).

//       gsap.to(guerlain,  {duration: 1, x: 0, y: 110, width: 70, ease: "power2"});
//       gsap.to(hedonist, {duration: 1, x: 0, y: -60, width: 50, ease: "power2"});
//       gsap.to(bottega, {duration: 1, x: 0, y: -50, width: 50, ease: "power2"});
// });
  
// });

// // PARFUM HEDONIST //

// hedonist.addEventListener("click", () => {
//   gsap.to(hedonist, {duration: 1, x: 0, y: 0, width: 150, ease: "power2"});
//   gsap.to(guerlain,  {duration: 1, x: -30, y: -30, width: 400,  ease: "power2"});
//   gsap.to(bottega, {duration: 1, x: -30, y: 10, width: 150, ease: "power2"});
//   gsap.to(collectionTitle, {duration: 1, color: "#d8a3ff",  ease: "power2"});
//   gsap.to(up, {duration: 1, color: "#d8a3ff",  ease: "power2"});
//   gsap.to(description, {duration: 1, opacity: 1, color: "#d8a3ff", ease: "power2"});

//   descriptionH.addEventListener("click", () => {

//       gsap.to(descriptionContentG, {duration: 1, scale: 1, opacity: 1, width: 250, y: 50, ease: "power1"});

//       gsap.to(guerlain,  {duration: 1, x: 130, y: 310, width: 70, ease: "power2"});
//       gsap.to(hedonist, {duration: 1, x: 0, y: -60, width: 50, ease: "power2"});
//       gsap.to(bottega, {duration: 1, x: 0, y: -50, width: 50, ease: "power2"});

//       gsap.to(descriptionG, {duration: 1, scale: 0});

// });
 
// });


    
//     } 
// });




// *****************************************************//
//**PARFUMS PICTURES PULSE**//
// guerlain.classList.add("pulse-parfums");
// hedonist.classList.add("pulse-parfums");
// bottega.classList.add("pulse-parfums");
// ****************************************************//

if (window.matchMedia("(min-width: 768px)").matches) {
    
  box3Md.addEventListener("click", () => {
  gsap.to(box3Md, {keyframes: [
          // {duration: 0.5, width: 100},
          {duration: 0.7, x: 0, delay: 0.1}, 
          {duration: 0.5, y: -150},
          {duration: 0.5, height: 800, width: 570}, 

          ]});

  gsap.to(box1Md, { duration: 1, x: -600, y: -20, width: 70 });
  gsap.to(box2Md, { duration: 1, x: -600, y: -10, width: 70 });
  gsap.to(btnBack,  {opacity: 1, duration: 1.5, delay: 3});

});

// // BUTTON RETOUR //
btnBack.addEventListener("click", () => {
  gsap.to(box3Md, {keyframes: [
          {duration: 1, height: 50}, 
          // {duration: 0.8, width: 200},
          {duration: 1, x: 0}, 
          {duration: 1, y: 0},
          {duration: 1, width: 700},
  
]});

  gsap.to(btnBack, {duration: 1.3, opacity: 0});
               
  gsap.to(box1Md, {width: 700, x: 0, duration: 1, delay: 2});
  gsap.to(box2Md, {width: 700, x: 0, duration: 1, delay: 2});
//***************************************************************************//
});


//************************** PARFUMS COLLECTION *************************** //

  // PARFUM GUERLAIN //
  guerlain.addEventListener("click", () => {
  gsap.to(guerlain, {duration: 1, x: -200, y: -250, width: 150,  ease: "power2"});
  gsap.to(bottega,  {duration: 1, x: -270, y: 250, width: 400, ease: "power2"});
  gsap.to(hedonist, {duration: 1, x: 550, y: 10, width: 150, ease: "power2"});
  gsap.to(collectionTitle, {duration: 1, color: "#70d6ff",  ease: "power2"});
  gsap.to(up, {duration: 1, color: "#70d6ff",  ease: "power2"});
  gsap.to(description, {duration: 1, opacity: 1, color: "#70d6ff", ease: "power2"});

  description.addEventListener("click", () => {


      gsap.to(descriptionContent, {duration: 1, opacity: 1, width: 570, height: 650, x: -130, ease: "power2"});
      gsap.to(guerlain,  {duration: 1, x: 80, y: 350, width: 120, ease: "power2"});
      gsap.to(hedonist, {duration: 1, x: 270, y: -80, width: 60,  ease: "power2"});
      gsap.to(bottega,  {duration: 1, x: -280, y: -80, width: 50, ease: "power2"});
      gsap.to(description, {duration: 1, opacity: 0, color: "#70d6ff", ease: "power2"});
      gsap.to(collectionTitle, {duration: 1, color: "#70d6ff", scale: 0.5,  ease: "power2"});
});
 
});

  // // PARFUM BOTTEGA //
  bottega.addEventListener("click", () => {
  gsap.to(bottega, {duration: 1, x: -570, y: 0, width: 150, ease: "power2"});
  gsap.to(hedonist,  {duration: 1, x: 180, y: 220, width: 400,  ease: "power2"});
  gsap.to(guerlain, {duration: 1, x: 400, y: -260, width: 150,  ease: "power2"});
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

  // // PARFUM HEDONIST //
  hedonist.addEventListener("click", () => {
  gsap.to(hedonist, {duration: 1, x: 0, y: 0, width: 150, ease: "power2"});
  gsap.to(guerlain,  {duration: 1, x: -30, y: -30, width: 400,  ease: "power2"});
  gsap.to(bottega, {duration: 1, x: -30, y: 10, width: 150, ease: "power2"});
  gsap.to(collectionTitle, {duration: 1, color: "#d8a3ff",  ease: "power2"});
  gsap.to(up, {duration: 1, color: "#d8a3ff",  ease: "power2"});
  gsap.to(description, {duration: 1, opacity: 1, color: "#d8a3ff", ease: "power2"});

  descriptionH.addEventListener("click", () => {

      gsap.to(descriptionContentG, {duration: 1, scale: 1, opacity: 1, width: 250, y: 50, ease: "power1"});

      gsap.to(guerlain,  {duration: 1, x: 130, y: 310, width: 70, ease: "power2"});
      gsap.to(hedonist, {duration: 1, x: 0, y: -60, width: 50, ease: "power2"});
      gsap.to(bottega, {duration: 1, x: 0, y: -50, width: 50, ease: "power2"});

      gsap.to(descriptionG, {duration: 1, scale: 0});

});
 
});

// // OREO'S PICTURE CLICK //
oreos.addEventListener("click", () => {
   // gsap.to(".principal-title", { duration: 0.8, color: "#af7603" });

   gsap.to(oreos, { duration: 0.5, x: 250, y: 0, scale: 4});
   gsap.to(".oreos-h2", { duration: 0.5, opacity: 1, x: 45, y: -25, scale: 0.7});

   gsap.to(cookies, { duration: 0.5, opacity: 0, x: -100});
   gsap.to(".img-coffees", { duration: 0.5, opacity: 0});
   gsap.to(".oreos-descriptions", {duration: 0.5, scale: 0.4, x: -60, y: -10});
   
   gsap.to(validate, { duration: 0.5, opacity: 1, x: 250, y: 290, scale: 1});
   bgFoods.classList.add("blur");

   // cookies.classList.remove("pulse");

});

validate.addEventListener("click", () => {
  // gsap.to(".principal-title", { duration: 0.3, color: "#000" });
   gsap.to(".oreos-h2", { duration: 0.5, x: 0, y: 0, opacity: 0, scale: 0 });
   gsap.to(oreos, { duration: 0.5, x: 0, y: 0, scale: 1});

   gsap.to(cookies, { duration: 0.5, opacity: 1, x: 0});
   gsap.to(".img-coffees", { duration: 0.5, opacity: 1});
   gsap.to(".oreos-descriptions", {duration: 0.5, scale: 0});

   // cookies.classList.add("pulse");

   
   gsap.to(validate, { duration: 0.5, opacity: 0, scale: 0});

   bgFoods.classList.remove("blur");
   // cookies.classList.add("pulse");

});



// COOKIES PICTURE CLICK //
cookies.addEventListener("click", () => {
   // gsap.to(".principal-title", { duration: 0.8, color: "#af7603" });

   gsap.to(cookies, { duration: 0.5, x: 230, y: 340, scale: 3});
   gsap.to(".cookies-h2", { duration: 0.5, opacity: 1, x: 25, y: -25, scale: 0.7});

   gsap.to(oreos, { duration: 0.5, opacity: 0, x: -100});
   gsap.to(".img-coffees", { duration: 0.5, opacity: 0});
   gsap.to(".cookies-descriptions", {duration: 0.5, scale: 0.6, x: -50, y: -20});
   
   gsap.to(validate, { duration: 0.5, opacity: 1, x: 230, y: 270, scale: 1});
   bgFoods.classList.add("blur");

   // cookies.classList.remove("pulse");

});

validate.addEventListener("click", () => {
  // gsap.to(".principal-title", { duration: 0.3, color: "#000" });
   gsap.to(".cookies-h2", { duration: 0.5, x: 0, y: 0, opacity: 0, scale: 0 });
   gsap.to(cookies, { duration: 0.5, x: 0, y: 0, scale: 1});

   gsap.to(oreos, { duration: 0.5, opacity: 1, x: 0});
   gsap.to(".img-coffees", { duration: 0.5, opacity: 1});
   gsap.to(".cookies-descriptions", {duration: 0.5, scale: 0});

   // cookies.classList.add("pulse");

   
   gsap.to(validate, { duration: 0.5, opacity: 0, scale: 0});

   bgFoods.classList.remove("blur");
   // cookies.classList.add("pulse");

});
 








} else if (window.matchMedia("(min-width: 360px)").matches) {
  
  box3Md.addEventListener("click", () => {
  gsap.to(box3Md, {keyframes: [
          {duration: 0.7, width: 30},
          {duration: 0.7, x: 0}, 
          {duration: 0.7, y: -130},
          {duration: 0.7, height: 350, width: 270}, 

          ]});

  gsap.to(box1Md, {width: 30, x: 0, duration: 0.7});
  gsap.to(box2Md, {width: 30, x: 0, duration: 0.7});
  gsap.to(btnBack,  {opacity: 1, duration: 1.5, delay: 3});

  //BUTTON RETOUR //
  btnBack.addEventListener("click", () => {
  gsap.to(box3Md, {keyframes: [
          {duration: 0.5, height: 25}, 
          // {duration: 0.8, width: 200},
          {duration: 0.5, x: 0}, 
          {duration: 0.5, y: 0},
          {duration: 0.5, width: 300,},
  
        ]});

  gsap.to(btnBack, {duration: 1.3, opacity: 0});
               
  gsap.to(box1Md, {width: 700, x: 0, duration: 1, delay: 2});
  gsap.to(box2Md, {width: 700, x: 0, duration: 1, delay: 2});

});

});




//BUTTON RETOUR //
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

// *****************************************************************************
// PARFUM GUERLAIN //

  guerlain.addEventListener("click", () => {
  gsap.to(guerlain, {duration: 1, x: -50, y: -140, width: 70, ease: "power2"});
  gsap.to(bottega,  {duration: 1, x: -30, y: 160, width: 240, ease: "power2"});
  gsap.to(hedonist, {duration: 1, x: 260, y: -10, width: 80,  ease: "power2"});
  gsap.to(collectionTitle, {duration: 1, color: "#70d6ff",  ease: "power2"});
  gsap.to(up, {duration: 1, color: "#70d6ff",  ease: "power2"});
  gsap.to(description, {duration: 1, opacity: 1, color: "#70d6ff", ease: "power2"});

  description.addEventListener("click", () => {


      gsap.to(descriptionContent, {duration: 1, opacity: 1, width: 270, height: 350, x: 10, y: 20, ease: "power2"});
      gsap.to(guerlain,  {duration: 1, x: 130, y: 290, width: 70, ease: "power2"});
      gsap.to(hedonist, {duration: 1, x: 270, y: -80, width: 60,  ease: "power2"});
      gsap.to(bottega,  {duration: 1, x: -280, y: -80, width: 50, ease: "power2"});
      gsap.to(description, {duration: 1, opacity: 0, color: "#70d6ff", ease: "power2"});
      gsap.to(collectionTitle, {duration: 1, color: "#70d6ff", scale: 0.5,  ease: "power2"});
});

  
});


// PARFUM BOTTEGA //

bottega.addEventListener("click", () => {
  gsap.to(bottega, {duration: 1, x: -250, y: 0, width: 90, ease: "power2"});
  gsap.to(hedonist,  {duration: 1, x: 70, y: 140, width: 240, ease: "power2"});
  gsap.to(guerlain, {duration: 1, x: 220, y: -120, width: 80,  ease: "power2"});
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

// PARFUM HEDONIST //

hedonist.addEventListener("click", () => {
  gsap.to(hedonist, {duration: 1, x: 0, y: 0, width: 90, ease: "power2"});
  gsap.to(guerlain,  {duration: 1, x: 0, y: 0, width: 260, ease: "power2"});
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


// *****************************************************//
//**PARFUMS PICTURES PULSE**//
oreos.classList.add("pulse");
cookies.classList.add("pulse");
coffees.classList.add("pulse");
muffins.classList.add("pulse");
macarons.classList.add("pulse");
profiteroles.classList.add("pulse");
// ****************************************************//

// // OREO'S PICTURE CLICK //
oreos.addEventListener("click", () => {

   oreos.classList.remove("pulse");
   gsap.to(".principal-title", { duration: 0.8, color: "#af7603" });

   gsap.to(oreos, { duration: 0.5, x: 130, y: 80, scale: 3.5});
   gsap.to(oreosH2, { duration: 0.5, opacity: 1, x: 15, y: -25, scale: 0.9});

   gsap.to(".img-cookies", { duration: 0.5, opacity: 0, x: -100});
   gsap.to(".img-coffees", { duration: 0.5, opacity: 0, x: -200,});
   gsap.to(".oreos-descriptions", {duration: 0.5, scale: 0.3, x: -85, y: -50});
   gsap.to(muffins, {opacity: 0});
   gsap.to(macarons, {opacity: 0});
   gsap.to(profiteroles, {opacity: 0});
   
   gsap.to(validate, { duration: 0.5, opacity: 1, x: 150, y: 170, scale: 1});
   bgFoods.classList.add("blur");

   

});

validate.addEventListener("click", () => {

   oreos.classList.remove("pulse");
   gsap.to(".principal-title", { duration: 0.3, color: "#000" });
   gsap.to(oreosH2, { duration: 0.5, opacity: 0, scale: 0 });

   gsap.to(oreos, { duration: 0.5, y: 0, x: -50, scale: 1});
   gsap.to(".img-cookies", { duration: 0.5, opacity: 1, x: 0});
   gsap.to(".img-coffees", { duration: 0.5, opacity: 1, x: 0});
   gsap.to(muffins, {opacity: 1});
   gsap.to(macarons, {opacity: 1});
   gsap.to(profiteroles, {opacity: 1});

   gsap.to(".oreos-descriptions", {scale: 0});
  
   
   gsap.to(validate, { duration: 0.5, opacity: 0, scale: 0});

   bgFoods.classList.remove("blur");

});

// COOKIES PICTURE CLICK //
cookies.addEventListener("click", () => {
   cookies.classList.remove("pulse");

   gsap.to(cookies, { duration: 0.5, x: 70, y: 280, scale: 3});
   gsap.to(".cookies-h2", { duration: 0.5, opacity: 1, x: 15, y: -25, scale: 0.7});

   gsap.to(oreos, { duration: 0.5, opacity: 0, x: -100});
   gsap.to(".img-coffees", { duration: 0.5, opacity: 0});
   gsap.to(".cookies-descriptions", {duration: 0.5, scale: 0.4, x: -80, y: -50});
   gsap.to(muffins, {opacity: 0});
   gsap.to(macarons, {opacity: 0});
   gsap.to(profiteroles, {opacity: 0});
   
   gsap.to(validate, { duration: 0.5, opacity: 1, x: 170, y: 160, scale: 1});
   bgFoods.classList.add("blur");

   // cookies.classList.remove("pulse");

});

validate.addEventListener("click", () => {
  // gsap.to(".principal-title", { duration: 0.3, color: "#000" });
   // gsap.to(".cookies-h2", { duration: 0.5, x: 0, y: 0, opacity: 0, scale: 0 });
   gsap.to(cookies, { duration: 0.5, x: 0, y: 0, scale: 1});

   gsap.to(oreos, { duration: 0.5, opacity: 1, x: 0});
   gsap.to(".img-coffees", { duration: 0.5, opacity: 1});
   gsap.to(".cookies-descriptions", {duration: 0.5, scale: 0});
   gsap.to(muffins, {opacity: 1});
   gsap.to(macarons, {opacity: 1});
   gsap.to(profiteroles, {opacity: 1});

   gsap.to(".cookies-h2", { duration: 0.5, opacity: 0, x: 15, y: -25, scale: 0});

   // cookies.classList.add("pulse");

   
   // gsap.to(validate, { duration: 0.5, opacity: 0, scale: 0});

   // bgFoods.classList.remove("blur");
   // cookies.classList.add("pulse");

});












}