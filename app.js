const box1 = document.querySelector(".box-container .box1");
const box2 = document.querySelector(".box-container .box2");
const box3 = document.querySelector(".box-container .box3");

// SCREEN //
const contentScreen = document.querySelector(".box-content-screen");
const contentScreenParagraphe = document.querySelector(".box-content-screen p");

const contentScreen2 = document.querySelector(".box-content-screen2");
const contentScreenParagraphe2 = document.querySelector(".box-content-screen2 p");

const contentScreen3 = document.querySelector(".box-content-screen3");
const contentScreenParagraphe3 = document.querySelector(".box-content-screen3 p");


// DYNAMICS LINES //
window.onload = function() {

	TweenMax.set("body", {opacity: 1});

	let tl1 = new TimelineMax();

	tl1

		.to(".ligne-1", 2, {width: "100%", ease:Circ.easeIn}, 1)

		.to(".ligne-2", 2, {height: "100%", ease:Circ.easeIn}, 1);		
		
}





box1.addEventListener("click", () => {
	gsap.to(box1, {duration: 0.5, opacity: 0});
	gsap.to(box2, {duration: 0.5, opacity: 0});
	gsap.to(box3, {duration: 0.5, opacity: 0});

	gsap.to(contentScreen, {duration: 0.5, scale: 1});



			contentScreen.addEventListener("click", () => {
	gsap.to(box1, {duration: 0.5, opacity: 1});
	gsap.to(box2, {duration: 0.5, opacity: 1});
	gsap.to(box3, {duration: 0.5, opacity: 1});

	gsap.to(contentScreen, {duration: 0.5, scale: 0});


});


});

box2.addEventListener("click", () => {
	gsap.to(box2, {duration: 0.5, opacity: 0});
	gsap.to(box1, {duration: 0.5, opacity: 0});
	gsap.to(box3, {duration: 0.5, opacity: 0});

	gsap.to(contentScreen2, {duration: 0.5, scale: 1});



			contentScreen2.addEventListener("click", () => {
	gsap.to(box1, {duration: 0.5, opacity: 1});
	gsap.to(box2, {duration: 0.5, opacity: 1});
	gsap.to(box3, {duration: 0.5, opacity: 1});

	gsap.to(contentScreen2, {duration: 0.5, scale: 0});


});


});

box3.addEventListener("click", () => {
	gsap.to(box3, {duration: 0.5, opacity: 0});
	gsap.to(box1, {duration: 0.5, opacity: 0});
	gsap.to(box2, {duration: 0.5, opacity: 0});

	gsap.to(contentScreen3, {duration: 0.5, scale: 1});



			contentScreen3.addEventListener("click", () => {
	gsap.to(box1, {duration: 0.5, opacity: 1});
	gsap.to(box2, {duration: 0.5, opacity: 1});
	gsap.to(box3, {duration: 0.5, opacity: 1});

	gsap.to(contentScreen3, {duration: 0.5, scale: 0});


});


});