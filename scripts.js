const elemsExercicio = document.querySelectorAll(".exercicio");
const elemTela = document.querySelector(".tela");
const elemVoltar = document.querySelector(".voltar");
const elemClose = document.querySelector(".close");
const elemPlay = document.querySelector(".play");
const elemPause = document.querySelector(".pause");
const elemCronometro = document.querySelector(".cronometro")
const elemHorario = document.querySelector(".horario")

// Adicionar classe tela--cronometro
elemsExercicio.forEach(function (elemExercicio) {
        elemExercicio.addEventListener("click", function () {
            elemTela.classList.add("tela--cronometro");
        });
});

elemVoltar.addEventListener("click", function() {
    elemTela.classList.remove("tela--cronometro");
    //console.log("Clicou!")
});


elemClose.addEventListener("click", function() {
    elemCronometro.classList.remove("iniciou");
    //console.log("Clicou!")
});

elemPlay.addEventListener("click", function() {
    elemCronometro.classList.add("iniciou");
    //console.log("Clicou!")
});

elemPause.addEventListener("click", function() {
    elemCronometro.classList.remove("iniciou");
    //console.log("Clicou!")
});

// Atualizar horario

function atualizarHorario() {
    const horas = new Date().getHours().toString().padStart(2,"0");;
    const minutos = new Date().getMinutes().toString().padStart(2,"0");
    const horario = horas + ":" + minutos;

    elemHorario.innerText= horario;
    //console.log(horario);
}

atualizarHorario();

setInterval(() => {
    atualizarHorario();
}, 1000);