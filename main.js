const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
    contadores[0].textContent = calculaTempo(tempos[i]);
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
      
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2029-12-10T00:00:00");
const tempoObjetivo2 = new Date("2026-04-16T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2]

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
 
 return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}
function atualizaCronometro(){
    for(let i=0; i<contadores.lenght; i++){
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}
function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro1000);
}
comecaCronometro();
