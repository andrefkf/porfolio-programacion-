const carousel = document.querySelector(".carousel");

carousel.addEventListener("wheel", (event) => {
    if (carousel.matches(":hover")) { // Solo si el mouse está sobre el carrusel
        event.preventDefault();
        carousel.scrollBy({
            top: event.deltaY > 0 ? 100 : -100, // Baja o sube 100px
            behavior: "smooth",
        });
    }
});
