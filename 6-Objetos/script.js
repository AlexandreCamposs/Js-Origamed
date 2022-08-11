//1- Crie um objeto com os seus dados pessoais, deve possuir pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: 'Alexandre',
  sobrenome: 'Campos',
  idade: 29,
  faculdade: 'Cursando',
  curso: 'ADS',
};
// console.table(dados);

//2-Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function () {
  return `${dados.nome} ${this.sobrenome}`;
};

//3-Modifique o valor da propriedade preço para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};
carro.preco = 3000;
// console.table(carro);

//4- Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem.
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'latir';
    } else {
      return 'nada';
    }
  },
};
console.log(cachorro);
