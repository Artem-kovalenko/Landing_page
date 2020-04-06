$(".anchor").on("click", function(event) {
	event.preventDefault();
 // Получаем высоту от самого верха документа, до блока куда хотим переехать
 let blockToScroll = $(this).attr("href");
 $('html, body').animate(
 {
 	scrollTop: $( blockToScroll ).offset().top
 }, 
 1000
 );
});

// открыть выпадающее меню
let burger = document.querySelector(".burger");
burger.addEventListener("click", function(e) {
	event.preventDefault();
	let burger__navigation_menu = document.querySelector(".burger__navigation_menu");
	burger__navigation_menu.classList.add("open");
});

// закрыть выпадающее меню по нажатию на крестик
let burger__navigation_menu = document.querySelector(".burger__navigation_menu");
let burgerClose = document.querySelector(".burgerClose");
burgerClose.addEventListener("click", function(e) {
	event.preventDefault();
	burger__navigation_menu.classList.remove("open");
});

// закрыть меню при нажатии на элемент навигации
let close__nav = document.querySelectorAll(".close__nav");
for (let i = 0; i < close__nav.length; i++) {
	close__nav[i].addEventListener("click", function(e) {
		event.preventDefault();
		burger__navigation_menu.classList.remove("open");
	});
};

