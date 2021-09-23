const menuAnimation = {
	init: function () {
		this.openMenu();
		// this.fixedMenu();
	},
	openMenu: function () {
		const icon = document.querySelector(".header-icon");
		const menuMobile = document.querySelector(".header-mobile")
		const overlayMenu = document.querySelector(".mobile-overlay")

		icon.addEventListener("click", () => {
			overlayMenu.classList.toggle("active");
		})
	},
	// fixedMenu: function () {
	// 	const menu = document.querySelector(".header");

	// 	window.onscroll = function () {
	// 		scrollFunction();
	// 	};

	// 	function scrollFunction() {
	// 		if (
	// 			document.body.scrollTop > 150 ||
	// 			document.documentElement.scrollTop > 150
	// 		) {
	// 			menu.classList.add("active");
	// 		} else {
	// 			menu.classList.remove("active");
	// 		}
	// 	}
	// },
};

menuAnimation.init();