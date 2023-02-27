function selecionar(input){
    // document.getElementById('quantidade').innerHTML = "1"; // forma de chamar o id
    if(input.checked){
        quantidade.innerHTML = "1";
    } else {
        quantidade.innerHTML = "0";
    }
}