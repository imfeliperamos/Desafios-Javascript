let currentIndex = 0;
const sections = document.querySelectorAll(".section");
const container = document.querySelector(".container");

function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;
    currentIndex = index;
    container.style.transform = `translateY(-${100 * currentIndex}vh)`;  // Move o container para a seção desejada
}

document.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        scrollToSection(currentIndex + 1); // Descer para a próxima seção
    } else if (event.deltaY < 0) {
        scrollToSection(currentIndex - 1); // Subir para a seção anterior
    }
}, { passive: false });

document.addEventListener("touchstart", handleTouchStart, { passive: false });
document.addEventListener("touchend", handleTouchEnd, { passive: false });

let touchStartY = 0;

function handleTouchStart(event) {
    touchStartY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
    const touchEndY = event.changedTouches[0].clientY;
    if (touchEndY < touchStartY) {
        scrollToSection(currentIndex + 1); // Descer para a próxima seção
    } else if (touchEndY > touchStartY) {
        scrollToSection(currentIndex - 1); // Subir para a seção anterior
    }
}
