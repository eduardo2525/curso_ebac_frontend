$(document).ready(function(){
    $(`#botao`).on('click', function(e){
        e.preventDefault();
    let addLista = $('#input').val();
    let novaLi = `<li>${addLista}</li>`;
        $('#input').val('');
        $('ul').append(novaLi);
    });
        $('ul').on('click', 'li', function(){
            $(this).toggleClass('riscado');
    })
})


