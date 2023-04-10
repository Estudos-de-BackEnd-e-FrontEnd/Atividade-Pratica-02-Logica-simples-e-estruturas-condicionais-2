let idade = Number(prompt('Quantos anos você tem ?'));
let peso = Number(prompt('Quanto você pesa ?'));

if (idade <= 12) {
    document.write(`Voce pertence a categoria Infantil`);
} else if (idade > 12 && idade <= 16 && peso <= 40) {
    document.write(`Voce pertence a categoria Juvenil leve`);
} else if (idade > 12 && idade <= 16 && peso > 40) {
    document.write(`Voce pertence a categoria Juvenil pesado`);
} else if (idade >= 17 && idade <= 24 && peso <= 45) {
    document.write(`Voce pertence a categoria Senior leve`);
} else if (idade >= 17 && idade <= 24 && peso > 45 && peso <= 60) {
    document.write(`Voce pertence a categoria Senior medio`);
} else if (idade >= 17 && idade <= 24 && peso > 60) {
    document.write(`Voce pertence a categoria Senior pesado`);
} else if (idade > 24) {
    document.write(`Voce pertence a categoria Veterano`);
}
