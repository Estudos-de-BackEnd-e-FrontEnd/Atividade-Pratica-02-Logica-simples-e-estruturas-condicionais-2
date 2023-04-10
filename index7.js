// Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.
// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.

let saldo = 300;
alert(`Seu saldo é de ${saldo}`);
let saque = Number(prompt('Quanto você deseja sacar? Temos somente notas de 5 e 10: '));
let taxa = 4.5;
let sacar = saldo - taxa;

if (saque > sacar) {
    alert('Você não tem saldo suficiente');
} else if (saque % 5 !== 0) {
    alert('O valor deve ser múltiplo de 5');
} else if (saque < 0) {
    alert('O valor deve ser maior que zero');
} else {
    saldo = sacar - saque;
    document.write(
        `Você sacou R$ ${saque.toFixed(2)}, e ficou com R$ ${saldo.toFixed(
            2
        )}, já com R$ 4,50 de taxa de saque contabilizada.`
    );
}
