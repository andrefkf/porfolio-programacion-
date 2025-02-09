document.addEventListener('DOMContentLoaded', () => {
    // Configuración para el primer carrusel
    const carousel1 = document.querySelector('.carousel-images');
    const images1 = document.querySelectorAll('.carousel-images img');
    let index1 = 0;

    // Botones del primer carrusel
    const prevBtn1 = document.querySelector('.prev-btn');
    const nextBtn1 = document.querySelector('.next-btn');

    const updateCarousel1 = () => {
        const width = images1[0].clientWidth;
        carousel1.style.transform = `translateX(-${index1 * width}px)`;
    };

    prevBtn1.addEventListener('click', () => {
        index1 = (index1 > 0) ? index1 - 1 : images1.length - 1;
        updateCarousel1();
    });

    nextBtn1.addEventListener('click', () => {
        index1 = (index1 < images1.length - 1) ? index1 + 1 : 0;
        updateCarousel1();
    });

    // Configuración para el segundo carrusel
    const carousel2 = document.querySelector('.carousel-images2');
    const images2 = document.querySelectorAll('.carousel-images2 img');
    let index2 = 0;

    // Botones del segundo carrusel
    const prevBtn2 = document.querySelector('.prev-btn2');
    const nextBtn2 = document.querySelector('.next-btn2');

    const updateCarousel2 = () => {
        const width = images2[0].clientWidth;
        carousel2.style.transform = `translateX(-${index2 * width}px)`;
    };

    prevBtn2.addEventListener('click', () => {
        index2 = (index2 > 0) ? index2 - 1 : images2.length - 1;
        updateCarousel2();
    });

    nextBtn2.addEventListener('click', () => {
        index2 = (index2 < images2.length - 1) ? index2 + 1 : 0;
        updateCarousel2();
    });
});

   
