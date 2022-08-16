// Exercício
// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img");
// console.log(imagens);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagenss = document.querySelectorAll('img[src^="src/img/imagem"]');
// console.log(imagenss)
// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
// console.log(links)
// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector(".animais-descricao h2");
// console.log(animais)
// Selecione o último p do site
const p = document.querySelectorAll("p");
// console.log(p[p.length -1])
// ou
// console.log(p[-- p.length])

// Exercício
// Mostre no console cada parágrado do site
const paragrafo = document.querySelectorAll("p");
// console.log(paragrafo)

// paragrafo.forEach(function(item,index) {
//      console.log(item,index);
// })
// paragrafo.forEach((item,index) => {
//     console.log(item,index);
// })

// Mostre o texto dos parágrafos no console
const texto = document.querySelectorAll("p");
// console.log(p);

texto.forEach(function (item) {
  // console.log(item.innerHTML)
});

texto.forEach((item) => {
  // console.log(item.innerHTML)
});
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");
imgs.forEach((item, index) => {
  // console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  // console.log(i++);
});
imgs.forEach(() => i++);

// Exercício
// Adicione a classe ativo a todos os itens do menu

const itens = document.querySelectorAll(".menu a");
// console.log(itens);

itens.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itens.forEach((item) => {
  item.classList.remove("ativo");
});
itens[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const imagens3 = document.querySelectorAll("img");

imagens3.forEach((item) => {
  const possuiAtributo = item.hasAttribute("alt");
  // console.log(imagens3,possuiAtributo);
});
// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
// link.setAttribute("href", "https://linkedin.com/");
// console.log(link);
