// document.write("<h1>Olá Mundo</h1>");
// document.write("<p>Nosso parágrafo</p>");
// document.write('<button class="btn btn-primary">Meu botão</button>');

// alert("Oi sumida");
// let resposta = prompt();
// if(resposta == "oi"){
//     alert("Eita como é fria")
// }

// alert("Ta tudo bem");
// let resposta2 = prompt();
// if(resposta2 == "tudo"){
//     alert("ta muito ocupada?")
// } else{
//     alert("ta fazendo oq?")
// }

//NOSSO CHAT BOT
let conversas = document.querySelector(".conversas");
let botao = document.querySelector(".btn");
let resposta = document.querySelector("#respostas");

conversas.innerHTML = "<div> Olá seja bem-vindo, em que posso ajudar </div>"

setTimeout(() => {
    conversas.innerHTML += "<div> 1. Financeiro <br> 2. Academico <br> 3. Comercial</div>";
}, 2000);

botao.addEventListener("click", () => {
    switch(resposta.value){
        case "1":
            conversas.innerHTML += "<div>Entendi, você escolheu Financeiro</div>";
        break;
        case "2":
            conversas.innerHTML += "<div>Entendi, você escolheu Academico</div>";
        break;
        case "3":
            conversas.innerHTML += "<div>Entendi, você escolheu Comercial</div>";
        break;
    }
})