let imgItemQuerySelector = '.app-container .gallery-container .row .img-item';

let imgItems = document.querySelectorAll(imgItemQuerySelector);

imgItems.forEach((btn) => {
    btn.onclick = () => {
        btn.classList.toggle('fullscreen-image');
        window.location.href = `#${btn.id}`;
    };
});
