//Desafio

//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt('qual é o dia da semana');

if (  
    diaDaSemana.toLowerCase() == 'sábado' ||
    diaDaSemana.toLowerCase() == 'sabado' ||
    diaDaSemana.toLowerCase() == 'domingo'
){
  alert('Bom fim de semana!');
}else{
  alert('Boa semana!');
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numeroPositivoNegativo = prompt('Digite um numero!');

if (parseInt(numeroPositivoNegativo) >=0){
  alert(`numero informado ${numeroPositivoNegativo} é Positivo`);
}else{
  alert(`numero informado ${numeroPositivoNegativo} é Negativo`);
}
//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let numeroPontuadoNoJogo = 0;
numeroPontuadoNoJogo = prompt('Digite o valor da sua pontuacao final');

if (parseInt(numeroPontuadoNoJogo) >= 100 ){
  alert('Parabéns, voce venceu!');
}else {
  alert('Tente novamente para ganhar!');
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let valorDaConta = 0;

valorDepositado = prompt('Qual valor do deposito');
if(parseInt(valorDepositado) >0){
  valorDaConta = valorDaConta + valorDepositado;
}else{
  alert('Somente numero maior que 0');
}

alert(`Saldo da conta: R$ ${parseFloat(valorDaConta)}.`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt('Digite seu nome');

alert(`Seja bem  vindo ${nome}`);