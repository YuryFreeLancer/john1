//

let icon_menu = document.querySelector('.icon-menu');
let menu_body = document.querySelector('.menu__body');
icon_menu.addEventListener('click', function(){
	icon_menu.classList.toggle('active');
	menu_body.classList.toggle('active');
})
