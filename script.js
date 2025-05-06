const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    document.querySelector(".navbar").classList.toggle("change");
    document.querySelector(".landing-banner").classList.toggle("blur");
});

let accordionItems = document.querySelectorAll('.accordionItem');

accordionItems.forEach(item => {
    item.addEventListener('click', function () {
        let isActive = this.classList.contains('active');

        // Remove 'active' from all items
        accordionItems.forEach(i => i.classList.remove('active'));

        // Toggle only if it wasn't already active
        if (!isActive) {
            this.classList.add('active');
        }
    });
});