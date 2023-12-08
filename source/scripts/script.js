const icon = document.querySelectorAll(".list-icon");
const textNome = document.querySelector('.text-nome');

icon.forEach(function(e) {
    e.addEventListener('mouseover', () => {
        const moverIcon = e.querySelector('.fa-brands');

        if (moverIcon) {
            moverIcon.style.transform = 'scale(1.4)';
            moverIcon.style.transition = '0.7s ease';
            moverIcon.style.color = '#fff';
        }
    });

    e.addEventListener('mouseout', () => {
        const moverIcon = e.querySelector('.fa-brands');

        if (moverIcon) {
            moverIcon.style.transform = 'scale(1)';
            moverIcon.style.transition = '0.7s ease';
            moverIcon.style.color = 'black';
        }
    })
})

textNome.addEventListener('mouseover', () => {
    
    if (textNome) {
        textNome.style.boxShadow = '5px 5px 5px #0605b4';
    }

    textNome.addEventListener('mouseout', () => {
        if (textNome) {
            textNome.style.boxShadow = '5px 5px 5px #c9dbdb';
        }
    })
})