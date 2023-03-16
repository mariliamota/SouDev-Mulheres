function calcular(){
let i = Number(numero.value);

if(i % 2 == 0){
    i = i + 5
   alert("Esse número é par, seu resultado é: " + i);
}else{
    i = i + 8
   alert("Esse número é impar, seu resultado é: " + i);
}
}