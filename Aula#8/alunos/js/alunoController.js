//READ
function listarAlunos(){

    // let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

    fetch("http://localhost:8000/alunos")
    .then(res => res.json())
    .then(alunos => {
        let tabela = document.getElementById("tabela-body");
        tabela.innerHTML = "";
        alunos.forEach((aluno, key) => {
            tabela.innerHTML += `<tr>
                                    <td>${aluno.id}</td>
                                    <td>${aluno.nome}</td>
                                    <td>${aluno.email}</td>
                                    <td>${aluno.telefone}</td>
                                    <td>${aluno.cidade}</td>
                                    <td>
                                        <button class="btn btn-outline-warning">Editar</button>
                                        <button class="btn btn-outline-danger" onclick="deletarAluno(${aluno.id})">Excluir</button>
                                    </td>
                                </tr>`;
        })
    })
}

//CREATE
function salvarAluno(){
    event.preventDefault();
    // let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    let aluno = {
        nome: nome.value,
        email: email.value,
        telefone: tel.value,
        cidade: cidade.value
    }
    fetch("http://localhost:8000/alunos", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(aluno)
    })
    .then(res => res.json())
    .then(resposta => {
        alert('Adicionado com Sucesso!');
        console.log(resposta)
    })
    // alunos.push(aluno);                                                     //array.push adiciona no final do array o proximo item
    // localStorage.setItem('alunos', JSON.stringify(alunos));
}

//UPDATE
function atualiazarAluno(){}

//DELETE
function deletarAluno(id){
    // let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    // let alunosAtualizados = [];

    // alunos.forEach((aluno, key) => {
    //     if(id != key){
    //         alunosAtualizados.push(aluno);
    //     }
    // });

    // localStorage.setItem('alunos', JSON.stringify(alunosAtualizados));

    fetch(`http://localhost:8000/alunos/${id}`, {
        method:"DELETE",
    })
    .then(res => res.json())
    .then(resposta => {
        alert('Excluido com sucesso!');
        console.log(resposta)
        listarAlunos();
    })
}