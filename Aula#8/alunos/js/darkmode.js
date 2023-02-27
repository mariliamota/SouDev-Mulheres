if(localStorage.getItem('darkmode') === 'true'){
    dark.checked = true; //marcando o input/switch
    alterarCores();
}

function alterarCores(){
    if(dark.checked){
        document.body.classList.add('bg-dark');
        document.body.classList.add('text-white');
        tabela.classList.add('table-dark')
    }else {
        document.body.classList.remove('bg-dark');
        document.body.classList.remove('text-white');
        tabela.classList.remove('table-dark')
    }
}

function ativarDarkmode(){
    if(dark.checked){
        localStorage.setItem('darkmode', true); //para salvar a informação
    }else{
        localStorage.setItem('darkmode', false); 
    }
    alterarCores();
}

//////////////////////////////////ARRAY DE OBJETOS///////////////////////////////////////////////
let alunos = [
    {
        id: 1,
        nome: 'Francisco',
        email: 'francisco@gmail.com',
        telefone: '00 00000-0000',
        cidade: 'Fortaleza-CE'
    },
    {
        id: 2,
        nome: 'Sarah Camilo',
        email: 'sarah@gmail.com',
        telefone: '00 00000-0000',
        cidade: 'Fortaleza-CE'
    },
    {
        id: 3,
        nome: 'Samanthan Kuran',
        email: 'samanthank@gmail.com',
        telefone: '00 00000-0000',
        cidade: 'Fortaleza-CE'
    },
    {
        id: 4,
        nome: 'Ana',
        email: 'ana@gmail.com',
        telefone: '00 00000-0000',
        cidade: 'Maranguape-CE'
    },
    {
        id: 5,
        nome: 'João',
        email: 'jao@gmail.com',
        telefone: '00 00000-0000',
        cidade: 'Maracanau-CE'
    },
    {
        id: 6,
        nome: 'Marília',
        email: 'marilia.mota90@gmail.com',
        telefone: '00 00000-0000',
        cidade: 'Maracanau-CE'
    },
    {
        id: 7,
        nome: 'Maria Mariana',
        email: 'mariananasce7@gmail.com',
        telefone: '00 00000-0000',
        cidade: 'Maracanau-CE'
    },
    {
        id: 8,
        nome: 'Ana Kelly',
        email: 'anakellymourab@gmail.com',
        telefone: '00 00000-0000',
        cidade: 'Caucaia-CE'
    },
    {
        id: 9,
        nome: 'Lane Gomes',
        email: 'lane.gomes@gmail.com',
        telefone: '00 00000-0000',
        cidade: 'Fortaleza-CE'
    },
];

function listarAlunos(){
    let tabela = document.getElementById("tabela-body");
    
    alunos.forEach((aluno) => {
        tabela.innerHTML += `<tr>
                                <td>${aluno.id}</td>
                                <td>${aluno.nome}</td>
                                <td>${aluno.email}</td>
                                <td>${aluno.telefone}</td>
                                <td>${aluno.cidade}</td>
                                <td>
                                    <button class="btn btn-outline-warning">Editar</button>
                                    <button class="btn btn-outline-danger">Excluir</button>
                                </td>
                            </tr>`;
    })
}

function salvarAluno(){
    event.preventDefault();
    let aluno = {
        nome: nome.value,
        email: email.value,
        telefone: tel.value,
        cidade: cidade.value
    }
    alunos.push(aluno)
}