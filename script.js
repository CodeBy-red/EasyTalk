function falar(texto){

let msg = new SpeechSynthesisUtterance();

msg.text = texto;

msg.lang = "pt-BR";

msg.rate = 0.9;

speechSynthesis.speak(msg);

fecharModal();

}


function abrirModal(id){

document.getElementById(id).style.display = "flex";

}


function fecharModal(){

let modais = document.querySelectorAll(".modal");

modais.forEach(modal => modal.style.display = "none");

}
