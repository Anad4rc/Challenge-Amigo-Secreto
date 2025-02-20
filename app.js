//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigo = [];

function adicionarAmigo(){

    let botaoAdicionar = document.querySelector('input').value;

  if (botaoAdicionar == ''){
    alert('Por favor, insira um nome.');
    return;
  }

  amigo.push(botaoAdicionar);
  //console.log(amigo);

  //limpando o campo de entrada
  document.querySelector('input').value = '';

  atualizarListaDeAmigos();

}


function atualizarListaDeAmigos(){
// limpar conteúdo atual da lista
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

//usando o for para adicionar amigos na lista
    for (let i = 0; i < amigo.length; i++) {
        listaAmigos.innerHTML += `<li>${amigo[i]}</li>`;
    }

}

function sortearAmigo(){
    //verifica se a lista está vazia
    if(amigo.length == 0){
        alert('Adicione os nomes na lista antes de sortea-los');
        return;
    }

    let gerarAmigoAleatorio = Math.floor(Math.random() * amigo.length);

    let amigoSorteado = amigo[gerarAmigoAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>O amigo sorteado é: <strong>${amigoSorteado}</strong></p>`;

}
 
