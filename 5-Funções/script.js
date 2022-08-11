// 1-Crie uma função para verificar se um valor é truthy
function verificar(valor) {
  return !!valor;
}
// console.log(verificar(''));

// 2-Crie uma função matemática que retorne o perimetro de um quadrado lembrando que perimentro é a soma dos quatro lados do quadrado
function quadrado(lado) {
  return lado * 4;
}
// console.log(quadrado(4));

// 3-Crie uma função que retire o seu nome completo ela deve possuir os parâmentros:nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}
// console.log(nomeCompleto('Alexandre', 'Campos'));

// 4-Crie uma função para ver se o número é par.
function numero(number) {
  var modulo = number % 2;
  if (number === 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(numero(5))
// 5-Crie uma função que retorne o tipo de dado do argumento passado nela(typeof)
function tipo(dado) {
  return typeof dado;
}
// console.log(tipo(5))

// 6-
//addEventListener é uma função nativa do JavaScript
//o primeiro parâmetro é o evento que ocorre e o segundo o callback
//utilize essa função para mostrar no console o seu nome completo
//quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  // console.log('Alexandre Campos')
});
//7-Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  // var totalPaises = 193;
  return ` Ainda falta visitar ${totalPaises - paisesVisitados} paises para visitar`;
}
// console.log(precisoVisitar);

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises};`
}
// console.log(20);
console.log(precisoVisitar(20));
console.log(jaVisitei(20));













