const swiper = new Swiper('.swiper', {
	// Optional parameters
	// direction: 'vertical',
	loop: true,
	slidesPerView: 3,
	spaceBetween: 30,

	// If we need pagination
	// pagination: {
	// 	el: '.swiper-pagination',
	// },

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-right',
		prevEl: '.swiper-button-left',
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
})

const btn = document.querySelector('.heder__menu')
const overlay = document.querySelector('.heder__menu-overlay')
const nav = document.querySelector('.nav__list')
const body = document.querySelector('.body')

btn.addEventListener('click', () => {
	nav.classList.toggle('menu-open')
	overlay.classList.toggle('menu-open')
	body.classList.toggle('active')
})
