function toggleMenu() {
    const nav = document.querySelector("nav.menu");
    nav.classList.toggle("show");
}

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 10) {
        header.classList.add("transparent");
    } else {
        header.classList.remove("transparent");
    }
});

function expandImage(img) {
    const modal = document.getElementById('modal');
    document.getElementById('modalImg').src = img.src;
    modal.classList.add('show');
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

  // Cambia color header al hacer scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 10) {
        header.classList.add("transparent");
    } else {
        header.classList.remove("transparent");
    }
});
    const boton = document.getElementById('hamburguesa');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
boton.addEventListener('click', () => {
    menu.classList.toggle('activo');
    overlay.classList.toggle('activo');
});
    overlay.addEventListener('click', () => {
menu.classList.remove('activo');
overlay.classList.remove('activo');});
