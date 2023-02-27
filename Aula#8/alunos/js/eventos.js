function alterarNome (){
    nome.classList.remove('is-invalid');
    if (nome.value.length > 2) {
        nome.classList.add('is-valid');
    } else {
        nome.classList.add('is-invalid');
    }
}

function alterarEmail (){
    email.classList.remove('is-invalid');
}

function alterarTel (){
    tel.classList.remove('is-invalid');
}

function alterarCidade (){
    cidade.classList.remove('is-invalid');
}

function validar() {
    //faz com que o formulário não seja enviado
    event.preventDefault();
    
    // if (document.getElementById('nome').value === '') {} usado de forma mais verbosa
    if (nome.value === ''){
        // nome.style.borderColor = 'red'; para deixar as bordas vermelhas quando não preenchido o campo
        nome.classList.add('is-invalid');
    }

    if (document.getElementById('email').value === '') {
        // email.style.borderColor = 'red';
        email.classList.add('is-invalid');
    }

    if (document.getElementById('tel').value === '') {
        // tel.style.borderColor = 'red';
        tel.classList.add('is-invalid');
    }

    if (document.getElementById('cidade').value === '') {
        // cidade.style.borderColor = 'red';
        cidade.classList.add('is-invalid');
    }
}