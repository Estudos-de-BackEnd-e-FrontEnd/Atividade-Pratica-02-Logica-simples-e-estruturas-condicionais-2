let dia = Number(prompt('Digite um número de 1 a 7: '));
if (dia > 7 || dia < 1) {
    alert('O número deve estar entre 1 e 7.');
    window.reload();
} else {
    switch (dia) {
        case 1:
            dia = 'Segunda';
            break;
        case 2:
            dia = 'Terça';
            break;
        case 3:
            dia = 'Quarta';
            break;
        case 4:
            dia = 'Quinta';
            break;
        case 5:
            dia = 'Sexta';
            break;
        case 6:
            dia = 'Sábado';
            break;
        case 7:
            dia = 'Domingo';
            break;
        default:
            dia = 'Inexistente';
    }
}
document.write(`Hoje é ${dia}`);
