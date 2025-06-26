/**
 * Archivo principal de JavaScript para Restaurante La Familia.
 * Este script maneja la interactividad general de todas las páginas,
 * incluyendo el menú móvil, carruseles y lógica específica por página.
 */

// Asegúrate de que todo el script se ejecute una vez que el DOM esté completamente cargado.
// Este es el ÚNICO document.addEventListener('DOMContentLoaded') que debe haber.
document.addEventListener('DOMContentLoaded', function () {

    // ======================================================
    // 1. Menú Móvil (Botón de Hamburguesa)
    // ======================================================
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        // Alternar la clase 'active' para mostrar/ocultar el menú
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active'); // Para animar el icono de hamburguesa (ej: rotación, desvanecimiento de barra central)
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded); // Accesibilidad
        });

        // Cerrar el menú al hacer clic en un enlace (para dispositivos móviles)
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Opcional: Cerrar el menú si se hace clic fuera de él (en móviles)
        document.addEventListener('click', function(event) {
            // Si el clic no fue dentro del menú ni en el botón de toggle, y el menú está activo
            if (!mainNav.contains(event.target) && !menuToggle.contains(event.target) && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ======================================================
    // 2. Inicialización de Carruseles Swiper
    // ======================================================

    // Inicialización del Swiper para Platos Populares
    // Verifica si el elemento existe antes de intentar inicializarlo
    const dishesSwiperElement = document.querySelector('.dishes-swiper');
    if (dishesSwiperElement) {
        const dishesSwiper = new Swiper(dishesSwiperElement, {
            slidesPerView: 1, // Muestra 1 slide en móvil por defecto
            spaceBetween: 20, // Espacio entre slides
            loop: true, // Habilita el bucle infinito
            grabCursor: true, // Cambia el cursor a una mano cuando se puede arrastrar

            // Paginación (los puntos inferiores)
            pagination: {
                el: '.dishes-pagination',
                clickable: true, // Permite hacer clic en los puntos para ir a un slide específico
            },

            // Navegación (flechas de anterior/siguiente)
            navigation: {
                nextEl: '.dishes-next',
                prevEl: '.dishes-prev',
            },

            // Puntos de ruptura para el diseño responsive
            breakpoints: {
                // Cuando la ventana tiene al menos 768px de ancho
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                // Cuando la ventana tiene al menos 1024px de ancho
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                }
            },
        });
    }


    // Inicialización del Swiper para la Galería de Instalaciones
    // Verifica si el elemento existe antes de intentar inicializarlo
    const gallerySwiperElement = document.querySelector('.gallery-swiper');
    if (gallerySwiperElement) {
        const gallerySwiper = new Swiper(gallerySwiperElement, {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,

            // Paginación
            pagination: {
                el: '.gallery-pagination',
                clickable: true,
            },

            // Navegación
            navigation: {
                nextEl: '.gallery-next',
                prevEl: '.gallery-prev',
            },

            // Puntos de ruptura para el diseño responsive (generalmente se mantiene 1 slide grande para galerías visuales)
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                }
            },

            // Efecto de transición (ej. 'fade' para una galería de imágenes se ve muy bien)
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },

            // Autoplay para la galería (opcional, para que las imágenes pasen automáticamente)
            autoplay: {
                delay: 4000, // Cambia cada 4 segundos
                disableOnInteraction: false, // El autoplay no se detiene si el usuario interactúa manualmente
            },
        });
    }

    // Inicialización del Swiper para Atracciones (si aplica a 'donde-encontrarnos.html')
    const attractionsSwiperElement = document.querySelector('.attractions-swiper');
    if (attractionsSwiperElement) {
        const attractionsSwiper = new Swiper(attractionsSwiperElement, {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            pagination: {
                el: '.attractions-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.attractions-next',
                prevEl: '.attractions-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                }
            }
        });
    }


    // ======================================================
    // 3. Lógica para el botón "Explora Nuestro Carta" (Hero Section)
    // ======================================================
    const heroButton = document.querySelector('.hero-button');
    if (heroButton) {
        heroButton.addEventListener('click', function() {
            // Redirige a la página de la carta
            window.location.href = './pages/carta.html';
        });
    }

    // ======================================================
    // 4. Lógica para la Tarjeta Interactiva (index.html)
    // ======================================================
    const interactiveCard = document.getElementById('interactiveCard');
    if (interactiveCard) {
        // Evento para cuando el ratón entra en la tarjeta (para escritorio)
        interactiveCard.addEventListener('mouseenter', () => {
            interactiveCard.classList.add('flipped');
        });
        // Evento para cuando el ratón sale de la tarjeta (para escritorio)
        interactiveCard.addEventListener('mouseleave', () => {
            interactiveCard.classList.remove('flipped');
        });
        // Evento de clic/toque para dispositivos táctiles (y también funciona en escritorio)
        interactiveCard.addEventListener('click', () => {
            interactiveCard.classList.toggle('flipped');
        });
    }

    // ======================================================
    // 5. Filtro de Categorías en carta.html
    // ======================================================
    const filterButtonsWrapper = document.querySelector('.filter-buttons-wrapper');
    const menuCategorySections = document.querySelectorAll('.menu-category-section');

    if (filterButtonsWrapper && menuCategorySections.length > 0) {
        const filterButtons = filterButtonsWrapper.querySelectorAll('.filter-button');

        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Elimina la clase 'active' de todos los botones
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Añade la clase 'active' al botón clickeado
                this.classList.add('active');

                const categoryToShow = this.dataset.category; // Obtiene la categoría del botón

                // Itera sobre todas las secciones de menú
                menuCategorySections.forEach(section => {
                    const sectionCategory = section.dataset.category; // Obtiene la categoría de la sección
                    // Muestra u oculta la sección según la categoría seleccionada
                    section.style.display = (categoryToShow === 'all' || sectionCategory === categoryToShow)
                        ? 'block'
                        : 'none';
                });
            });
        });
        // Asegurarse de que al cargar la página, se muestre la categoría "all" o la primera activa
        const initialActiveButton = filterButtonsWrapper.querySelector('.filter-button.active');
        if (initialActiveButton) {
            initialActiveButton.click(); // Simula un click en el botón activo inicial
        } else if (filterButtons.length > 0) {
            filterButtons[0].click(); // Si no hay activo, clickea el primero (generalmente 'all')
        }
    }


    // ======================================================
    // 6. Scroll suave a mapa (en donde-encontrarnos.html)
    // ======================================================
    const scrollToMapButton = document.querySelector('.scroll-to-map');
    if (scrollToMapButton) {
        scrollToMapButton.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el comportamiento de anclaje por defecto
            // Desplazamiento suave al elemento destino
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

}); // Fin de DOMContentLoaded