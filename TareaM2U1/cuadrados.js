
const cuadrados = document.querySelectorAll('.cuadrado');

cuadrados.forEach(cuadrado => {
    cuadrado.addEventListener('click', () => {
        document.body.style.backgroundColor = window.getComputedStyle(cuadrado).backgroundColor;
    });
});
;


