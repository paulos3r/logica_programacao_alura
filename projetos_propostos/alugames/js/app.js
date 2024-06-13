function alterarStatus(id){

  let jogoClicado = document.getElementById(`game-${id}`);
  let imagem = jogoClicado.querySelector('.dashboard__item__img');
  let botao = jogoClicado.querySelector('.dashboard__item__button');
  let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');

  let confirmacao = prompt('para confirmar digite CONFIRMAR');
  
  if( confirmacao.toUpperCase() != 'CONFIRMAR'){
    return
  }
  
  if (imagem.classList.contains('dashboard__item__img--rented')){
    imagem.classList.remove('dashboard__item__img--rented');
    botao.textContent = 'Alugar'
    botao.classList.remove('dashboard__item__button--return');
  }else{
    imagem.classList.add('dashboard__item__img--rented');
    botao.textContent = 'Devolver'
    botao.classList.add('dashboard__item__button--return');
  }
}