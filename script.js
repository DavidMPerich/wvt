const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    document.querySelector(".navbar").classList.toggle("change");
    document.querySelector(".landing-banner").classList.toggle("blur");
});

let accordion = document.querySelector('.accordionBox'),
    accordionItem = document.querySelectorAll('.accordionItem');
accordionItem.forEach(elem => {
    elem.addEventListener('click', function (e) {
        e.srcElement.parentElement.classList.toggle('active');
    });
});