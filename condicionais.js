let condicao = true;
let condicao2 = false


if (condicao) {
    console.log ('entramos nas condição')}

//crie uma função que receba 2 numeros
/*function receba(num1, num2) {
    if (num1 === num2) {
      return true
    } //return false
}

console.log(receba(5,5))*/

//formas de condicionar
/*function receba(num1, num2) {
    let resultado = false
    if (num1 === num2) {
      resultado = true
    } 
    return true
}

console.log(receba(5,5))

//
let n1m= number (prompt('digite um numeto'))
let n2 = Number(prompt('digite um musa sua'))
function receba(num1, num2) {
    let resultado = 'numeros diferentes'
    if (num1 === num2) {
      resultado ='numeros sao iguais'
    } return resultado
}

console.log(receba(5,5))

//Recebe 2 números (chamaremos de num1 e num2)
//Compara esses números entre si:
//Retorna mensagens dizendo se os números são iguais ou diferentes

/*let n1= Number(prompt('digite um numeto'))
let n2 = Number(prompt('digite um musa sua'))
function receba(num1, num2,) {
    if (num1 < num2) {
      res = 'numeros sao maior:' + num1 + ' e ' + num2
    } else if(res = 'num 2 maior:' + num1 + ' e ' + num2 ) else (res = 'numeros iguais:' + num1 + num2)

}*/

let anoNascimento = Number(prompt('ano nascimento'));
function calcularIdade(anoNascimento) {
    let anoAtual = 2023;
    idadeAtual = anoAtual - anoNascimento;
    let votação = '';
    if(idadeAtual < 16) {
        votação = 'não pode votar'
    } else if(idadeAtual >= 16 && idadeAtual <= 17 || idadeAtual >= 70) 
    {votação = 'voce pode votar, se quiser'} else if(idadeAtual >= 18 && idadeAtual < 70) 
    {votação = 'voce precisa votar'} else{votação = 'idade não reconhecida pelo sistema'}
    
    return votação
}
console.log(calcularIdade(anoNascimento))

//o uso do switch case ou do if/else?
//Uma pessoa pode estudar em uma faculdade se:
//Tiver concluído o ensino médio
//Tiver 18 anos ou mais
//Não estiver cursando outra faculdade

let ensinoMedio = prompt('concluiu e.m?')
let idade = Number(prompt('digite sua idade'))
let ondeEstuda = prompt('cursa faculdade?')

function editalFacul(ensinoMedio, idade, ondeEstuda) {
 let mensagem = '';
  if(ensinoMedio.toUpperCase() === 'sim') {
    'TA LIBERADO'
  } if(idade >= 18) {
    mensagem = 'PODE FAZER FACUL!'
  } else if(ondeEstuda.toUpperCase() === 'NAO') {
    mensagem = 'VAI FAZER FACUL'
  } else (mensagem = 'VOCE NAO PODE ENTRAR')
  return mensagem;
}
let mesagemFacul = editalFacul(ensinoMedio, idade, ondeEstuda)
console.log(mesagemFacul)

//o uso do switch case
let pais = 'Croacia'
switch(pais) {
  case 'Brasil':
    console.log('Brasileiro')
    break;
    case 'linchtein':
    console.log('linchteinense')
    break;
    console.log('croata')
      break;
      default:
      console.log('nacionalidade não encontrada')
      break
}

//
let numero = Number(prompt('numero 1'))
let numero1 = Number(prompt('numero 2'));
opções = Number(prompt("digite uma opção;\n1- soma\n2- subtração\n3- multiplicação\n4- divisão"));
switch (opções) {
  case 1:
    let soma = numero + numero1;
    console.log(soma);
    break;
    case 2:
      let subtração = numero - numero1
      console.log(subtração)
      break;
      case 3:
        let multiplicação = numero * numero1;
        console.log(multiplicação)
        break;
        case 4:
          let divisão = numero / numero1;
          console.log(divisão)
          break;
     default:
    console.log('opção não entrada')
    break;
}











//Escreva um programa que receba o Pokémon inicial escolhido pela pessoa e imprima no console o seu tipo:
//Bulbasauro (Planta e Veneno), Charmander (Fogo), Squirtle (Água)
