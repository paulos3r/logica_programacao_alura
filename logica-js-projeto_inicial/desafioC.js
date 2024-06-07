//Desafios
//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let numeroDe1a10 = 1;

while(numeroDe1a10 <= 10){
  alert(numeroDe1a10);
  numeroDe1a10++;
}

//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let numeroDe10a1 = 10;

while(numeroDe10a1 >= 1){
  alert(numeroDe10a1);
  numeroDe10a1--;
}

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let numeroRegressivo;
numeroRegressivo = parseInt(prompt('Digite um numero DIFERETEN de 0'));

while(numeroRegressivo != 0){
  if(numeroRegressivo==0){
    alert('Numero tem que ser diferente de 0');
  }else if (numeroRegressivo>0){
    console.log(numeroRegressivo);
    numeroRegressivo--;
  }else{
    console.log(numeroRegressivo);
    numeroRegressivo++;
  }
}

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numeroProgressivo;
numeroProgressivo = parseInt(prompt('Digite um numero DIFERETEN de 0'));
// -2 -1 0 1 2 
while(numeroProgressivo == numeroProgressivo){
  if(numeroProgressivo == 0){
    alert('Numero tem que ser DIFERENTE de 0');
  }else if (numeroProgressivo > 0){

    let contador =0;

    while(contador <= numeroProgressivo){
      console.log(contador);
      contador++;
    }
  }else{
    let contador=0;

    while(contador >= numeroProgressivo){
      console.log(contador);
      contador--;
    }
  }
}
