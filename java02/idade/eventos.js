let idade = prompt("Ola, qual a sua idade?");
alert("Que legal, você tem " + idade);
if (idade < 14){
    alert ("você é uma criança");
} else if (idade < 18){
    alert ("você é adolescente")
} else if (idade < 60){
    alert ("você é adulto, vá pagar boleto")
} else{
    alert ("vocé é idoso")
}