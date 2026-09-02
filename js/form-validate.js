const reqTel = document.getElementById('req-telephone');

const payDesktop = document.getElementById('pay-desktop');
const payMobile = document.getElementById('pay-mobile');
const extraDesktop = document.getElementById('extra-desktop');
const extraMobile = document.getElementById('extra-mobile');

// Função para desabilitar elemento fieldset de acordo com a responsividade

function responsivePayment() {
    const isMobile = window.innerWidth <= 1040;

    payDesktop.disabled = isMobile;
    payMobile.disabled = !isMobile;
    extraDesktop.disabled = isMobile;
    extraMobile.disabled = !isMobile;

    console.log({
        largura: window.innerWidth,
        isMobile: isMobile,
        desktopDisabled: payDesktop.disabled,
        mobileDisabled: payMobile.disabled
    })
}

responsivePayment();
window.addEventListener("resize", responsivePayment);