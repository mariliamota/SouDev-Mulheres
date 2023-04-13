const tabuada = require('../src/tabuada');

test('garante que a funcao lidar com números reais maiores', () => {
    let resultado = tabuada.somar(8.355, 10.6789);
    expect(resultado).toBe(19.0339);
});

test('garante que a função subtrair está funcionando', () => {
    let resultado = tabuada.subtrair(6.9, 4.2);
    expect(resultado).toBe(2.7);
});

test('garante que a função divisão está funcionando', () => {
    let resultado = tabuada.dividir(4,0);
    expect(resultado).toBe("n2 não pode ser 0");
});

test('garante que a função de multiplicar está funcionando', () => {
    let resultado = tabuada.multiplicação(3,5);
    expect(resultado).toBe(15);
});