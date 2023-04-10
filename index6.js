let inputTheFirstNumber = prompt('Informe o primeiro valor:');
let inputTheSecondNumber = prompt('Informe o secundo valor:');
let operator = prompt('Informe o operador:\ndigite apenas os simbolos, exemplos: * / + -');

let result = eval(inputTheFirstNumber + operator + inputTheSecondNumber);
if(result == "Infinity"){
    document.write(`Não é possível divir por 0`);
}else{
    document.write(`O resultado é: ${result}`);
}


