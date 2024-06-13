let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = `RS 0`;

function adicionar(){
  //recuperar valores nome, quantidade, valor
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitarioProduto = produto.split('R$')[1];
  let quantidadeProduto = document.getElementById('quantidade').value;


  //calcular o preco, nosso subtotal
  let preco = quantidadeProduto * valorUnitarioProduto;

  //adicionar no carrinho
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML += `<section class="carrinho__produtos__produto">
                        <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$1400</span>
                        </section>`;
  //atualizar o valor total da compra
  totalGeral += preco;

  let valorCompraTotal = document.getElementById('valor-total');
  valorCompraTotal.textContent = `R$ ${totalGeral}`

  document.getElementById('quantidade').value = 0;

};
function limpar(){
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = `RS 0`;
  };