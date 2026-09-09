const client_img = document.getElementById('clientImg');
const client_name = document.getElementById('clientName');
const client_msg = document.getElementById('clientMsg');

const button_prev = document.getElementById('prev');
const button_next = document.getElementById('next');

let i = 1;

function movimento() {

    feedback_box.style.transform = `translateX(${translateX}px)`;
    feedback_box.style.opacity = 0;

    setTimeout( () => {
        feedback_box.style.transform = `translateX(${translateX * -1}px)`
        client_img.src = `assets/img/cliente${i}.webp`;
    }, 600);

    setTimeout( () => {
        feedback_box.style.transform = posicaoInicial;
        feedback_box.style.opacity = 1;

        switch (i) {
            case 1: {
                client_msg.innerHTML = "\"Entrega super rápida, recomendo demais!\"";
                client_name.innerHTML = "Vitor Tiago"; break;
            } 
            case 2: {
                client_msg.innerHTML = "\"Lanches maravilhosos e entrega no prazo!\"";
                client_name.innerHTML = "Maria Clara"; break;

            }
            case 3: {
                client_name.innerHTML = "Juliane de Souza";
                client_msg.innerHTML = "\"Melhores bolos que eu já comi!\"";
            }

        }
        if (i == 2) {
        
        } else if (i == 3) {

        }
    }, 880);
}

button_prev.addEventListener('click', () => {

    i = i > 1 ? i - 1 : 3;

    atualizarCliente();

});

button_next.addEventListener('click', () => {

    i = i < 3 ? i + 1 : 1;

    atualizarCliente();

});