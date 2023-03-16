function multiplicar(){
    event.preventDefault();

    let a = Number(numero1.value);
    let i 
    let b
    let c
    let d
    let e 
    let f
    let g 
    let h 
    let j 
    let k 

    i = a * 1
    b = a * 2
    c = a * 3
    d = a * 4
    e = a * 5
    f = a * 6
    g = a * 7
    h= a * 8
    j = a * 9
    k = a * 10

    if(a == 0 || a > 10){
        resultado.innerHTML = "numero invalido"
    }else{
        
        resultado.innerHTML = "RESULTADO <br>";
        
        resultado.innerHTML += a + " x 1 = " + i + '<br>';
        resultado.innerHTML += a + " x 2 = " + b + '<br>';
        resultado.innerHTML += a + " x 3 = " + c + '<br>';
        resultado.innerHTML += a + " x 4 = " + d + '<br>';
        resultado.innerHTML += a + " x 5 = " + e + '<br>';
        resultado.innerHTML += a + " x 6 = " + f + '<br>';
        resultado.innerHTML += a + " x 7 = " + g + '<br>';
        resultado.innerHTML += a + " x 8 = " + h + '<br>';
        resultado.innerHTML += a + " x 9 = " + j + '<br>';
        resultado.innerHTML += a + " x 10 = " + k + '<br>';
    }
}
