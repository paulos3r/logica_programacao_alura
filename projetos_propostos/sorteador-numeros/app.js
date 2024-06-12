
function sortear(){
  let quantidade = document.getElementById('quantidade').value;
  let de = parseInt( document.getElementById('de').value );
  let ate = parseInt( document.getElementById('ate').value );

  let numeroSorteado = [];
  let numero;

  if(de >= ate){
    alert('Valor DO NÚMERO deve ser vaior que o ATE O NÚMERO');
    reiniciar();
    return
  }

  for (let i=0; i<quantidade;i++){
    numero = obterNumeroAleatorio(de,ate);

    while(numeroSorteado.includes(numero)){
      numero = obterNumeroAleatorio(de,ate);
    }

    numeroSorteado.push( numero );
  }

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numeroSorteado}</label>`;

  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){
  /**
   * documentacao https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  **/
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}
function alterarStatusBotao(){
  let botao = document.getElementById('btn-reiniciar');
  if (botao.classList.contains('container__botao-desabilitado')){
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  }else{
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado'); 
  }
}

function reiniciar(){

  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

  alterarStatusBotao();
}