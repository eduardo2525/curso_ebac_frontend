let campoA = document.getElementById('campoA') ;
let campoB = document.getElementById('campoB');

function Validou() {
    if(campoB.value > campoA.value){
        document.getElementById("mensagem").innerHTML = "Formulário válido!";
        document.getElementById("mensagem").style.color = "green";
        document.getElementById("mensagem").style.fontSize = "30px";
    } else {
        document.getElementById("mensagem").innerHTML = "Formulário inválido!";
        document.getElementById("mensagem").style.color = "red";
        document.getElementById("mensagem").style.fontSize = "30px";
    }
}