const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    document.querySelector(".navbar").classList.toggle("change");
    document.querySelector(".landing-banner").classList.toggle("blur");
});