// let pessoa = {
//     altura: 1.77,
//     pele:{
//         tom: "clara",
//         tipo: "oleosa"
//     },
//     olhos: "castanhos",
//     cabelo: "preto",
//     idade: 31
// }

// document.write(pessoa.pele.tipo);

let produto = {
    nome: "arroz",
    preco: 4.69,
    qnt: 3
}

let lista = [
    {
        nome: "arroz",
        preco: 4.69,
        qtd: 3
    },
    {
        nome: "cx. ovo",
        preco: 17.00,
        qtd: 1
    }
];

for (let i = 0; i < lista.length; i++){
    document.write(lista[i].preco+"<br>")
}