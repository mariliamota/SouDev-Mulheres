function buscarCEP(){
    fetch(`https://viacep.com.br/ws/${cep.value}/json`) //o fetch cria uma requisição para um endereço
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(conteudo){
            logradouro.value = conteudo.logradouro;
            bairro.value = conteudo.bairro;
            cidade.value = conteudo.localidade;
            estado.value = conteudo.uf;
        });
}