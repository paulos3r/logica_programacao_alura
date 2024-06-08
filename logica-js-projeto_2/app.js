let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

exibirMensagemInicial();

function exibirTextoNaTela(teg,texto){
  let campo = document.querySelector(teg);
  campo.innerHTML = texto;

  //responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rete:1.2}); // precisa de import no cabecario do projeto, antes consultar a documentacao
}

function exibirMensagemInicial(){
  exibirTextoNaTela('h1','Jogo do Número Secreto');
  exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
}

function verificarChute(){
  let chute  = document.querySelector('input').value;

  if(chute == numeroSecreto){

    exibirTextoNaTela('h1','Acertou');
    let palavraTentativa = tentativa > 1 ? 'tentativa' : 'tentativa';
    let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativa} ${palavraTentativa}`
    exibirTextoNaTela('p',mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('inputChutar').disabled = true;
  } else if (numeroSecreto > chute ){
    exibirTextoNaTela('p','Numero secreto é MAIOR');
  }else{
    exibirTextoNaTela('p','Numero secreto é MENOR');
  }
  tentativa++;
  limparCampo();
  
};

function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
  let quantidadeElementoNaLista = listaDeNumerosSorteados.length;
  //limpa a lista caso o numero maximo da lista for atingido
  if (quantidadeElementoNaLista == numeroMaximo){
    listaDeNumerosSorteados = [];
  }

  if(listaDeNumerosSorteados.includes(numeroEscolhido)){ // includes e uma funcao para verificar se ja existe aquele valor
    return gerarNumeroAleatorio();  // usando recursao
  }else{
    listaDeNumerosSorteados.push(numeroEscolhido);   // vai adicionar ao fim da lista o valor
    return numeroEscolhido;
  }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativa = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
  document.getElementById('inputChutar').disabled = false;
}