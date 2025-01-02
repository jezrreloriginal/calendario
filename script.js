let progressBar = document.querySelector(".progress-bar");
let percentageText = document.querySelector(".percentage");
let redirectButton = document.querySelector(".redirect-button");

function redirectToAnotherPage() {
    // Redirecionar para a outra página
    window.location.href = "1.html";
}

function simulateLoading() {
    let width = 0;
    let interval = setInterval(function () {
        if (width >= 100) {
            clearInterval(interval);
            // Quando atingir 100%, mostrar o botão
            redirectButton.style.display = "block";
        } else {
            width++;
            progressBar.style.width = width + "%";
            percentageText.innerText = width + "%";
        }
    }, 20);
}

document.addEventListener("DOMContentLoaded", function () {
    simulateLoading();
});





///////////////////


$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('show');
    });
});


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".loader-container").style.display = "none";
        // Redirecionar para a página principal (index.html) após 2 segundos
        window.location.href = "index.html";
    }, 2000);
});


const carrossel = document.querySelector('.carrossel');

        function nextSlide() {
            carrossel.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                carrossel.appendChild(carrossel.firstElementChild);
                carrossel.style.transition = 'none';
                carrossel.style.transform = 'translateX(0)';
                setTimeout(() => {
                    carrossel.style.transition = 'transform 2s ease-in-out';
                });
            }, 2000);
        }

        setInterval(nextSlide, 1000);

    