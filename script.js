const alunos = [
    {nome: "Eduardo", nota: 8},
    {nome: "Gabriel", nota: 7},
    {nome: "Guilherme", nota: 5},
    {nome: "Julia", nota: 6},
    {nome: "Paula", nota: 3},
    {nome: "Thiago", nota: 2},
    {nome: "Victor", nota: 4}
]

function media() {
    const alunosAprovados = alunos.filter(function(item) {
        return item.nota >= 6;
    })

    console.log(alunosAprovados)
}

media();