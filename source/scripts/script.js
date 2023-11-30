const livre = '<img src="source/images/classificacao-livre-logo-1.png" alt="classificacao livre">';
const dezAnos = '<img src="source/images/classificacao-10-anos-logo.png" alt="classificacao 10 anos">';
const dozeAnos = '<img src="source/images/classificacao-12-anos-logo-1.png" alt="classificacao 12 anos">';
const quatozeAnos = '<img src="source/images/classificacao-14-anos-logo.png" alt="classificacao 14 anos">';
const desesseisAnos = '<img src="source/images/classificacao-16-anos-logo-1-768x768.png" alt="classificacao 16 anos">';
const desoitoAnos = '<img src="source/images/classificacao-18-anos-logo-1.png" alt="classificacao 18 anos">';

document.getElementById("botao").addEventListener('click', () => {
    let idade = document.getElementById("idade").value;
    let mensagem = document.querySelector(".mensagem")
    let h2 = document.createElement("h2");
    
    if (idade < 10) {
        mensagem.innerHTML = livre;
        h2.innerHTML = "Conteúdo Livre";
        mensagem.appendChild(h2);
    }else if (idade >= 10 && idade < 12) {
        mensagem.innerHTML = dezAnos;
        h2.innerHTML = "Conteúdo Pra Maior de 10 Anos";
        mensagem.appendChild(h2);
    }else if (idade >= 12 && idade < 14) {
        mensagem.innerHTML = dozeAnos;
        h2.innerHTML = "Conteúdo Pra Maior de 12 Anos";
        mensagem.appendChild(h2);
    }else if (idade >= 14 && idade < 16) {
        mensagem.innerHTML = quatozeAnos;
        h2.innerHTML = "Conteúdo Pra Maior de 14 Anos";
        mensagem.appendChild(h2);
    }else if (idade >= 16 && idade <= 17) {
        mensagem.innerHTML = desesseisAnos;
        h2.innerHTML = "Conteúdo Pra Maior de 16 Anos";
        mensagem.appendChild(h2);
    }else {
        mensagem.innerHTML = desoitoAnos;
        h2.innerHTML = "Conteúdo Pra Maior de 18 Anos";
        mensagem.appendChild(h2);
    }
    
    document.getElementById("idade").value = '';
})