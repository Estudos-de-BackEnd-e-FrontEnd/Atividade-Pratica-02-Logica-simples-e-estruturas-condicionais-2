/* somar o custo de fabrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). */

const cost_of_manufacturing = Number(prompt('Qual o custo de fabrica?'));
const carDealer = Number(prompt('Qual a taxa do distribuidor?')) / 100;
const carTax = Number(prompt('Qual a taxa de imposto?')) / 100;
const carCost = cost_of_manufacturing + (cost_of_manufacturing * carDealer) + (cost_of_manufacturing * carTax)
document.write(`O custo final é: R$ ${carCost.toFixed(2).toString().replace('.', ',')}`);
