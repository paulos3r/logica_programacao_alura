alert('Boas vindas ao jogo do numero secreto');
let numeroMaximo=5000;
let numeroSreto = parseInt( Math.random() * numeroMaximo + 1 );
let numeroSelecionado;
let quantidadeTentativas=0;

//para testar vou retornar o numero no console
console.log(numeroSreto);

while(numeroSelecionado != numeroSreto){
  numeroSelecionado = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
  quantidadeTentativas++;
  //se o chute for numero secreto retornar voce acertou
  if (numeroSelecionado==numeroSreto){
    break;
  } else if (numeroSreto > numeroSelecionado){
    alert(`Numero selecionado ${numeroSelecionado} e MAIOR que o numero secreto`);
  } else {
    alert(`Numero selecionado ${numeroSelecionado} e MENOR que o numero secreto`);
  }
}

let palavraTentativa = quantidadeTentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Voce acertou numero secreto ${numeroSreto} | quantidade de ${palavraTentativa}: ${quantidadeTentativas}`);