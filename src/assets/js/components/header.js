let navbarToggler = document.querySelector('.navbar-toggler');

if (navbarToggler) {
    navbarToggler.addEventListener('click', function () {
        let isExpanded = this.getAttribute('aria-expanded') === 'true';
        let target = document.querySelector(this.getAttribute('data-target'))

        if (isExpanded) {
            this.setAttribute('aria-expanded', 'false');
            target.classList.remove('show');
        } else {
            this.setAttribute('aria-expanded', 'true');
            target.classList.add('show');
        }
    });
}