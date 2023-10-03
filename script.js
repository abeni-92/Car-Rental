document.addEventListener("DOMContentLoaded", () => {
  const bar = document.querySelector('.bar');
  const navBar = document.getElementById('navbar');
  const close = document.querySelector('.close');

  navBar.style.transform = 'translateX(-100%)';

  bar.addEventListener("click", (e) => {
    navBar.style.transform = 'translateX(0%)';
  });

  close.addEventListener("click", () => {
    navBar.style.transform = 'translateX(-100%)';
  })
})


