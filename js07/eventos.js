// array é uma variavel composta de varios valores
// let contatos = [
//     "Mariana",
//     "Carol",
//     "Julia",
//     "Maritana",
//     "Lane",
//     "Thalita",
//     "Vanessa",
//     "Samanthan",
//     "Andy",
//     "Rebeca Clarilene",
// ];

// let contatos = [
//     {
//         nome: "Mariana",
//         telefone: "85 9 9999-0000"
//     },
//     {
//         nome: "Carol",
//         telefone: "85 9 9999-0000"
//     },
//     {
//         nome: "Ana Kelly",
//         telefone: "85 9 9999-0000"
//     },
//     {
//         nome: "Samanthan",
//         telefone: "85 9 9999-0000"
//     },
//     {
//         nome: "Thalita",
//         telefone: "85 9 9999-0000"
//     },
//     {
//         nome: "Andy",
//         telefone: "85 9 9999-0000"
//     },
//     {
//         nome: "Lane",
//         telefone: "85 9 9999-0000"
//     },
//     {
//         nome: "Maritana",
//         telefone: "85 9 9999-0000"
//     },
//     {
//         nome: "Rebeca",
//         telefone: "85 9 9999-0000"
//     },
//     {
//         nome: "Vanessa",
//         telefone: "85 9 9999-0000"
//     }
// ];
// for (x = 0; x <= 9; x++){
//     lista.innerHTML += `<li> <strong> ${contatos[x].nome}: </strong> ${contatos[x].telefone} </li>`;
// }  estrutura de repetição

let contatos = [
    {
        nome: "Mariana",
        telefone: "85 9 9999-0000"
    },
    {
        nome: "Carol",
        telefone: "85 9 9999-0000"
    },
    {
        nome: "Ana Kelly",
        telefone: "85 9 9999-0000"
    },
    {
        nome: "Samanthan",
        telefone: "85 9 9999-0000"
    },
    {
        nome: "Thalita",
        telefone: "85 9 9999-0000"
    },
    {
        nome: "Andy",
        telefone: "85 9 9999-0000"
    },
    {
        nome: "Lane",
        telefone: "85 9 9999-0000"
    },
    {
        nome: "Maritana",
        telefone: "85 9 9999-0000"
    },
    {
        nome: "Rebeca",
        telefone: "85 9 9999-0000"
    },
    {
        nome: "Vanessa",
        telefone: "85 9 9999-0000"
    },
    {
        nome: "Rosana",
        telefone: "85 9 9999-0000"
    }
];

function exibir(cadaContato){
    lista.innerHTML += `<li> <strong> ${cadaContato.nome}: </strong> ${cadaContato.telefone} </li>`;
}

contatos.forEach(exibir);