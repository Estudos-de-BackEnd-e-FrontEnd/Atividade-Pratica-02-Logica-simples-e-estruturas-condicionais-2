// Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

let velocidade = Number(prompt('Qual sua velocidade?'));

if (velocidade > 80) {
    let limite = velocidade - 80;
    let multa = limite * 5;
    alert(
        `Você foi multado em R$5 por cada quilômetro ultrapassado, resultando em uma multa de ${multa} reais`
    );
} else {
    alert('Você está dentro do limite permitido');
}
