const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

function generateDots() {
	const dotsContainer = document.querySelector('.dots');
	slides.forEach((slide, index) => {
	  const dot = document.createElement('div');
	  dot.classList.add('dot');
	  if (index === 0) {
		dot.classList.add('dot_selected');
	  }
	  dotsContainer.appendChild(dot);
	});

  }
window.addEventListener('load', generateDots);

let currentSlide = 0;
const bannerImage = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');

function showSlide(slideIndex) {
	currentSlide = slideIndex;
	bannerImage.src = slides[slideIndex].image;
	bannerText.innerHTML = slides[slideIndex].tagLine;
}

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

leftArrow.addEventListener('click', handleLeftArrowClick);
rightArrow.addEventListener('click', handleRightArrowClick);

function handleLeftArrowClick() {
    console.log('Left arrow clicked');
	if (currentSlide === 0) {
		showSlide(slides.length - 1);
	} else {
		showSlide(currentSlide - 1);
	}
	document.querySelector('.dot_selected').classList.remove('dot_selected');
	document.querySelectorAll('.dot')[currentSlide].classList.add('dot_selected');
}

function handleRightArrowClick() {
    console.log('Right arrow clicked');
	if (currentSlide === slides.length - 1) {
		showSlide(0);
	} else {
		showSlide(currentSlide + 1);
	}
	document.querySelector('.dot_selected').classList.remove('dot_selected');
	document.querySelectorAll('.dot')[currentSlide].classList.add('dot_selected');
}
