document.addEventListener('DOMContentLoaded', () => {
    const acercaSection = document.querySelector('#acerca');
    const elementos = document.querySelectorAll('.porfolie .nom, .porfolie .area, .porfolie .profile-photo');

    // Observador de intersección para detectar cuando la sección entra y sale de la vista
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando la sección entra en la vista, reiniciamos las clases para la animación de entrada
                entry.target.classList.remove('hidden', 'hide');
                entry.target.classList.add('visible');
            } else {
                // Cuando la sección sale de la vista, preparamos la animación de salida
                entry.target.classList.remove('visible');
                entry.target.classList.add('hide');
            }
        });
    }, { threshold: 0.5 }); // Activar cuando al menos el 50% de la sección esté visible

    // Aplicar el observador a los elementos de la sección
    elementos.forEach(element => {
        // Inicialmente los elementos están ocultos con la clase 'hidden'
        element.classList.add('hidden');
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const acercaSection = document.querySelector('#acerca');
    const elementos = document.querySelectorAll('.left-content .titulo, .left-content .text, .cuadrado');

    // Observador de intersección para detectar cuando la sección entra y sale de la vista
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando la sección entra en la vista, reiniciamos las clases para la animación de entrada
                entry.target.classList.remove('hidden', 'hide');
                entry.target.classList.add('visible');
            } else {
                // Cuando la sección sale de la vista, preparamos la animación de salida
                entry.target.classList.remove('visible');
                entry.target.classList.add('hide');
            }
        });
    }, { threshold: 0.5 }); // Activar cuando al menos el 50% de la sección esté visible

    // Aplicar el observador a los elementos de la sección
    elementos.forEach(element => {
        // Inicialmente los elementos están ocultos con la clase 'hidden'
        element.classList.add('hidden');
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll(
        '#porfolio .titule, #porfolio .proy, #porfolio .tite, #porfolio .descri, #porfolio .lit, #porfolio .portfolio-img, #porfolio .carousel-btn'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden', 'hide');
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('hide');
            }
        });
    }, { threshold: 0.5 });

    elementos.forEach((el) => {
        el.classList.add('hidden');
        observer.observe(el);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll(
        '#porfolio2 .titule, #porfolio2 .proy2, #porfolio2 .tite2, #porfolio2 .descri2, #porfolio2 .lit2, #porfolio2 .portfolio-img2, #porfolio2 .carousel-btn2'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden', 'hide');
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('hide');
            }
        });
    }, { threshold: 0.5 });

    elementos.forEach((el) => {
        el.classList.add('hidden');
        observer.observe(el);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contacSection = document.querySelector('#contac');
    const elementos = document.querySelectorAll('.left, .titular, .text2, .social a');

    // Observador de intersección
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadir clase para animación de entrada
                entry.target.classList.remove('hidden', 'hide');
                entry.target.classList.add('visible');
            } else {
                // Añadir clase para animación de salida
                entry.target.classList.remove('visible');
                entry.target.classList.add('hide');
            }
        });
    }, { threshold: 0.5 }); // 50% de visibilidad activa la animación

    // Configurar los elementos con la clase 'hidden' y observarlos
    elementos.forEach(element => {
        element.classList.add('hidden');
        observer.observe(element);
    });
});
