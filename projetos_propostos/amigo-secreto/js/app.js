let amigos = [];

function adicionar(){
  let amigo = document.getElementById('nome-amigo').value;
  let listaAmigos = document.getElementById('lista-amigos');

  if(amigo == ''){
    alert('Informe um nome')
    return
  }

  if ( amigos.includes(amigo) ){
    alert('Ja possui esse nome ');
    return
  }

  amigos.push(amigo);

  alert(listaAmigos.textContent);

  if (listaAmigos.textContent == ''){
    listaAmigos.textContent = amigo;
  }else{
    listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo;
  }

  document.getElementById('nome-amigo').value = '';
}

function sortear(){
  embaralha(amigos);
  let listaSorteio  = document.getElementById('lista-sorteio');

  if(amigos.length < 3){
    alert('necessario ter no minimo 3 pessoas participantes');
    return
  }

  for (let i = 0; i < amigos.length; i++){
    if (i  == amigos.length-1){
      listaSorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>'; 
    }else{
      listaSorteio.innerHTML += amigos[i] + ' --> ' + amigos[i+1] + '<br>'; 
    }
  }
}

function embaralha(lista){
  for (let indice = lista.length;indice;indice--){
    const indiceAleatorio = Math.floor( Math.random() * indice );

    [lista[indice-1],lista[indiceAleatorio]] = 
      [lista[indiceAleatorio],lista[indice -1]];
  }
}

function reiniciar(){
  amigos = [];
  document.getElementById('lista-amigos').innerHTML='';
  document.getElementById('lista-sorteio').innerHTML = '';
}