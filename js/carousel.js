const feedback_box = document.getElementById('feedback-box');
const client_img = document.getElementById('clientImg');
const client_name = document.getElementById('clientName');
const client_msg = document.getElementById('clientMsg');
const buttons = document.getElementById('btns');
const button_prev = document.getElementById('prev');
const button_next = document.getElementById('next');

const posicaoInicial = getComputedStyle(feedback_box).transform;

let translateX;
let i = 1;

button_prev.addEventListener("click", () => {
    translateX = -500;
    i = (i < 1) ? 3 : i--;
});

button_next.addEventListener("click", () => {
    translateX = 500;

    i = (i < 3) ? ++i: 1;
    console.log(i + " 2 ");
}) ;

buttons.addEventListener("click", () => {

    feedback_box.style.transform = `translateX(${translateX}px)`;
    feedback_box.style.opacity = 0;

    setTimeout( () => {
        feedback_box.style.transform = `translateX(${translateX * -1}px)`
        console.log(i);
        client_img.src = `assets/img/cliente${i}.webp`;
    }, 1200);

    setTimeout( () => {
        feedback_box.style.transform = posicaoInicial;
        feedback_box.style.opacity = 1;
    }, 2000);
})





