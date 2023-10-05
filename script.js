const bar = document.querySelector('.bar');
const navBar = document.getElementById('navbar');
const close = document.querySelector('.close');
const links = document.querySelectorAll('.link');

navBar.style.transform = 'translateX(-100%)';

bar.addEventListener("click", () => {
	navBar.style.transform = 'translateX(0%)';
});

close.addEventListener("click", () => {
	navBar.style.transform = 'translateX(-100%)';
});

links.forEach(link => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		navBar.style.transform = 'translateX(-100%)';
		navBar.style.transition = 'transform 0.5s ease-in-out'

		setTimeout(() => {
			window.location.href = link.href;
			}, 500); 
	});
});

