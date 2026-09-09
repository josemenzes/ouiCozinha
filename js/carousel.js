const client_img = document.getElementById('clientImg');
const client_name = document.getElementById('clientName');
const client_msg = document.getElementById('clientMsg');

const button_prev = document.getElementById('prev');
const button_next = document.getElementById('next');

let i = 1;

const clientes = {
    1: {
        nome: 'Vitor Tiago',
        mensagem: '"Entrega super rápida, recomendo demais!"'
    },

    2: {
        nome: 'Maria Clara',
        mensagem: '"Lanches maravilhosos e entrega no prazo!"'
    },

    3: {
        nome: 'Juliane de Souza',
        mensagem: '"Melhores bolos que eu já comi!"'
    }
};

function atualizarCliente() {

    client_img.src = `assets/img/cliente${i}.webp`;
    client_name.textContent = clientes[i].nome;
    client_msg.textContent = clientes[i].mensagem;

}

button_prev.addEventListener('click', () => {

    i = i > 1 ? i - 1 : 3;

    atualizarCliente();

});

button_next.addEventListener('click', () => {

    i = i < 3 ? i + 1 : 1;

    atualizarCliente();

});