let personHeight = Number(prompt('Qual a sua altura?\nobs: digite apenas numeros:')) / 100;
let personWeight = Number(prompt('Qual o seu peso?\nobs: digite apenas numeros:'));
let BMI = personWeight / personHeight ** 2;

if (BMI < 18.5) {
    document.write(`Você está abaixo da faixa de peso ideal, pois o seu IMC é: ${BMI.toFixed(2)}`);
} else if (BMI > 24.99) {
    document.write(`Você está acima da faixa de peso ideal, pois o seu IMC é: ${BMI.toFixed(2)}`);
} else {
    document.write(`Você está dentro da faixa de peso ideal, pois o seu IMC é: ${BMI.toFixed(2)}`);
}
