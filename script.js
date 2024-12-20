const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const img = document.querySelector('.presente')

let cores = ['green', 'blue', 'deeppink', 'orange', 'red'];
let i = 0;

function luzesNatal() {
    const mudaCor = setInterval(function () {
        body.style.backgroundColor = cores[i];
        i++;
    }, 500);

    setTimeout(function () {
        clearInterval(mudaCor);
        i = 0;
        luzesNatal();
    }, 2500)
}
luzesNatal();

function abrirPresente() {
    img.src = "midia/papaiNoelRebolando.gif";
    h1.innerText = 'Merry Christmas!'
}

function recarregar() {
    img.src = "midia/presente.png";
    h1.innerText = 'Abra-me!'
}