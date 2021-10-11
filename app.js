const burgerMenu = document.querySelector('.header .navBar .navList .burgerMenu');
const mobileMenu = document.querySelector('.header .navBar .navList ul');
const menuItem = document.querySelectorAll('.header .navBar .navList ul li a');
const header = document.querySelector('.header.container');

burgerMenu.addEventListener('click', () => {
	burgerMenu.classList.toggle('active');
	mobileMenu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menuItem.forEach((item) => {
	item.addEventListener('click', () => {
		burgerMenu.classList.toggle('active');
		mobileMenu.classList.toggle('active');
	});
});