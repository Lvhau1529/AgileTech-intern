const menuAnimation = {
	init: function () {
		this.burgerIcon();
		this.openMenu();
		this.fixedMenu();
	},
	burgerIcon: function () {
		const burger = document.querySelector(".header__mobile-wrapper");
		const icons = document.querySelectorAll(".header__mobile-wrapper span");
		const menu = document.querySelector(".header__nav-list");

		burger.addEventListener("click", () => {
			menu.classList.toggle("active");
			icons.forEach((item) => {
				item.classList.toggle("active");
			});
		});
	},
	openMenu: function () {
		// const list = document.querySelectorAll(
		// 	".list__item:nth-child(2), .list__item:nth-child(3)"
		// );
		const list = document.querySelectorAll(".list__item");
		const subMenu = document.querySelectorAll(".subnav__list");

		// list[1].addEventListener("click", () => {
		//   list[1].querySelector('.list__item-link').style.color = "#ff9500";
		//   subMenu[0].classList.toggle("active");
		// })

		// list[2].addEventListener("click", () => {
		//   subMenu[1].classList.toggle("active");
		// })

		list.forEach((item) => {
			item.addEventListener("click", () => {
				item.classList.toggle("active");
			});
		});
	},
	fixedMenu: function () {
		const menu = document.querySelector(".header");

		window.onscroll = function () {
			scrollFunction();
		};

		function scrollFunction() {
			if (
				document.body.scrollTop > 150 ||
				document.documentElement.scrollTop > 150
			) {
				menu.classList.add("active");
			} else {
				menu.classList.remove("active");
			}
		}
	},
};

const countUp = {
	init: function () {
		this.countUp();
	},
	countUp: function () {
		const counters = document.querySelectorAll(".glance-item-number span");

		counters.forEach((counter) => {
			counter.innerHTML = "0";
			const updateCounter = () => {
				const target = +counter.getAttribute("data-target");
				const currentNumber = +counter.innerText;

				const increament = target / 200;

				if (currentNumber < target) {
					counter.innerText = `${Math.ceil(currentNumber + increament)}`;
					setTimeout(updateCounter, 10);
				} else {
					counter.innerText = target;
				}
			};
			updateCounter();
		});
	},
};

const sliderShow = {
	init: function () {
		this.sliderBrand();
		this.sliderClient();
	},
	sliderBrand: function () {
		const slide = document.querySelector(".slides");
		let slides = document.querySelectorAll(".slide");
		let index = 1;
		let slideId;

		const firstClone = slides[0].cloneNode(true);
		const lastClone = slides[slides.length - 1].cloneNode(true);

		firstClone.id = "first-clone";
		lastClone.id = "last-clone";

		slide.append(firstClone);
		slide.prepend(lastClone);

		const slideWidth = slides[index].clientWidth;

		slide.style.transform = `translateX(${-slideWidth * index}px)`;

		const startSlide = () => {
			slideId = setInterval(() => {
				index++;
				slide.style.transform = `translateX(${-slideWidth * index}px)`;
				slide.style.transition = "0.7s";
			}, 3000);
		};

		slide.addEventListener("transitionend", () => {
			slides = document.querySelectorAll(".slide");
			if (slides[index].id === firstClone.id) {
				slide.style.transition = "none";
				index = 1;
				slide.style.transform = `translateX(${-slideWidth * index}px)`;
			}
		});

		// startSlide();
	},
	sliderClient: function () {
		const vw = Math.max(
			document.documentElement.clientWidth || 0,
			window.innerWidth || 0
		);
		const slide = document.querySelector(".client-wrapper");
		let slides = document.querySelectorAll(".client-item");
		let index = 1;
		let slideId;

		const firstClone = slides[0].cloneNode(true);
		const lastClone = slides[slides.length - 1].cloneNode(true);

		firstClone.id = "first-clone";
		lastClone.id = "last-clone";

		slide.append(firstClone);
		slide.prepend(lastClone);

		const slideWidth = slides[index].clientWidth;
		if (vw <= 425) {
			slide.style.transform = `translateX(${-slideWidth * index}px)`;
		} else {
			slide.style.transform = `translateX(${-(slideWidth + 22) * index}px)`;
		}

		const startSlide = () => {
			slideId = setInterval(() => {
				index++;
				if (vw <= 425) {
					slide.style.transform = `translateX(${-slideWidth * index}px)`;
				} else {
					slide.style.transform = `translateX(${-(slideWidth + 22) * index}px)`;
				}
				slide.style.transition = "0.7s";
			}, 3000);
		};

		slide.addEventListener("transitionend", () => {
			slides = document.querySelectorAll(".client-item");
			if (slides[index].id === firstClone.id) {
				slide.style.transition = "none";
				index = 1;
				if (vw <= 425) {
					slide.style.transform = `translateX(${-slideWidth * index}px)`;
				} else {
					slide.style.transform = `translateX(${-(slideWidth + 22) * index}px)`;
				}
			}
		});

		startSlide();
	},
};

// Observer
const countElement = document.querySelector(".glance-wrapper");

let options = {
	root: null,
	threshold: 1,
};

let observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			countUp.init();
			observer.unobserve(entry.target);
		} else {
			return;
		}
	});
}, options);

// Call function
observer.observe(countElement);
sliderShow.init();
menuAnimation.init();

// Typing animation
class TypeWriter {
	constructor(txtElement, words, wait = 3000) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = "";
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.type();
		this.isDeleting = false;
	}

	type() {
		// Current index of word
		const current = this.wordIndex % this.words.length;
		// Get full text of current word
		const fullTxt = this.words[current];

		// Check if deleting
		if (this.isDeleting) {
			// Remove char
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			// Add char
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		// Insert txt into element
		this.txtElement.innerText = `${this.txt}`;

		// Initial Type Speed
		let typeSpeed = 200;

		if (this.isDeleting) {
			typeSpeed /= 2;
		}

		// If word is complete
		if (!this.isDeleting && this.txt === fullTxt) {
			// Make pause at end
			typeSpeed = 1000;
			// Set delete to true
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === "") {
			this.isDeleting = false;
			// Move to next word
			this.wordIndex++;
			// Pause before start typing
			typeSpeed = 500;
		}

		setTimeout(() => this.type(), typeSpeed);
	}
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
	const txtElement = document.querySelector(".typer");
	const words = txtElement.getAttribute("data-words").split(",");
	const wait = txtElement.getAttribute("data-wait");
	// Init TypeWriter
	new TypeWriter(txtElement, words, wait);
}
