document.querySelector('.product-swatch').addEventListener('toggle', function(e) {
    if (!this.hasAttribute('open')) {
        this.classList.remove('is-open');
    }
    else {
        this.classList.add('is-open');
    }
});

document.querySelector('.product-swatch').addEventListener('focusout', function(e) {
    setTimeout(() => {
        this.removeAttribute('open');
        this.classList.remove('is-open');
    }, 250);
});

document.querySelectorAll('.product-swatch div a').forEach(link => {
    link.addEventListener('click', function(e) {
        document.querySelector('.product-swatch summary span').innerHTML = this.innerHTML;
    });
});