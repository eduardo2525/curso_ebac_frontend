$(document).ready(function(e){
    $('#Telefone').mask(('(00) 00000-0000'))
    $('#CPF').mask(('000.000.000-00'))
    $('#Cep').mask(('00.000-000'))

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            telefone:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            Cpf:{
                required: true
            },
        },
        messages:{
            nome: 'Preencha o Campo com seu Nome Completo!',
            telefone: 'Insira o seu Telefone!',
            email: 'Campo de E-mail é Obrigatorio!',
            Cpf: 'Insira o seu CPF!'
        }
    })
})