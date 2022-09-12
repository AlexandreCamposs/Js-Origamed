// // Exercício
// // Retorne no console todas as imagens do site
// const imagens = document.querySelectorAll("img");
// // console.log(imagens);
// // Retorne no console apenas as imagens que começaram com a palavra imagem
// const imagenss = document.querySelectorAll('img[src^="src/img/imagem"]');
// // console.log(imagenss)
// // Selecione todos os links internos (onde o href começa com #)
// const links = document.querySelectorAll('[href^="#"]');
// // console.log(links)
// // Selecione o primeiro h2 dentro de .animais-descricao
// const animais = document.querySelector(".animais-descricao h2");
// // console.log(animais)
// // Selecione o último p do site
// const p = document.querySelectorAll("p");
// // console.log(p[p.length -1])
// // ou
// // console.log(p[-- p.length])

// // Exercício
// // Mostre no console cada parágrado do site
// const paragrafo = document.querySelectorAll("p");
// // console.log(paragrafo)

// // paragrafo.forEach(function(item,index) {
// //      console.log(item,index);
// // })
// // paragrafo.forEach((item,index) => {
// //     console.log(item,index);
// // })

// // Mostre o texto dos parágrafos no console
// const texto = document.querySelectorAll("p");
// // console.log(p);

// texto.forEach(function (item) {
//   // console.log(item.innerHTML)
// });

// texto.forEach((item) => {
//   // console.log(item.innerHTML)
// });
// // Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll("img");
// imgs.forEach((item, index) => {
//   // console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   // console.log(i++);
// });
// imgs.forEach(() => i++);

// // Exercício
// // Adicione a classe ativo a todos os itens do menu

// const itens = document.querySelectorAll(".menu a");
// // console.log(itens);

// itens.forEach((item) => {
//   item.classList.add("ativo");
// });

// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// itens.forEach((item) => {
//   item.classList.remove("ativo");
// });
// itens[0].classList.add("ativo");

// // Verifique se as imagens possuem o atributo alt
// const imagens3 = document.querySelectorAll("img");

// imagens3.forEach((item) => {
//   const possuiAtributo = item.hasAttribute("alt");
//   // console.log(imagens3,possuiAtributo);
// });
// // Modifique o href do link externo no menu
// const link = document.querySelector('a[href^="http"]');
// // link.setAttribute("href", "https://linkedin.com/");
// // console.log(link);

// // Exercício Dimensões e Distâncias.
// // Verifique a distância da primeira imagem  em relação ao topo da página
// const img = document.querySelector("img");
// const imgTop = img.offsetTop;
// // console.log(imgTop);

// function somaImagens() {
//   // Retorne a soma da largura de todas as imagens
//   const imgT = document.querySelectorAll("img");
//   let soma = 0;
//   imgT.forEach((imagem) => {
//     soma = soma + imagem.offsetWidth;
//   });
//   // console.log(soma);
// }
// window.onload = function () {
//   somaImagens();
// };
// // Verifique se os links da página possuem  o mínimo recomendado para telas utilizadas  com o dedo. (48px/48px de acordo com o google)
// const linkss = document.querySelectorAll("a");

// linkss.forEach((links) => {
//   const linkWidth = links.offsetWidth;
//   const linkHeight = links.offsetHeight;
//   if (linkWidth >= 47 && linkHeight >= 47) {
//     // console.log("Possui boa acessibilidade!");
//   } else {
//     // console.log("Não possui boa acessibilidade!");
//   }
// });
// // Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
// const browerSmall = window.matchMedia("(max-width: 720px)").matches;

// if (browerSmall) {
//   const menu = document.querySelector(".menu");
//   menu.classList.add("menu-mobile");
// }

// // Exercício Event
// // Quando o usuário clicar nos links internos do site,
// // adicione a classe ativo ao item clicado e remova dos
// // demais itens caso eles possuam a mesma. Previna
// // o comportamento padrão desses links
// const linksss = document.querySelectorAll('a[href^="#"]');
// // console.log(linkss)

// function handleLink(event) {
//   event.preventDefault();
//   linksss.forEach((link) => {
//     link.classList.remove("ativo");
//   });
//   event.currentTarget.classList.add("ativo");
//   // console.log(event);
// }
// linksss.forEach((link) => {
//   link.addEventListener("click", handleLink);
// });

// // Selecione todos os elementos do site começando a partir do body,
// // ao clique mostre exatamente quais elementos estão sendo clicados

// const elementos = document.querySelectorAll("body *");

// // function handleElement(event) {
// //   console.log(event.currentTarget);
// // }

// // function handleElement(event) {
// //   event.currentTarget.remove();
// // }
// // elementos.forEach((elemento) => {
// //   elemento.addEventListener("click", handleElement);
// // });
// // Utilizando o código anterior, ao invés de mostrar no console,
// // remova o elemento que está sendo clicado, o método remove() remove um elemento
// // Se o usuário clicar na tecla (t), aumente todo o texto do site.

// // function clickT(event) {
// //   console.log(event.key);
// //   if( event.key === 't') {
// //     document.documentElement.classList.toggle('textomaior');
// //   }
// // }

// // window.addEventListener("keydown", clickT);

// // Exercício transversing
// // Duplique o menu e adicione ele em copy
// // const menu = document.querySelector('.menu');
// // const copy = document.querySelector('.copy');

// // const clone = menu.cloneNode(true);

// // copy.appendChild(clone)

// // Selecione o primeiro DT da dl de Faq
// const faq = document.querySelector(".faq");
// const primeiroDt = faq.querySelector("dt");

// // Selecione o DD referente ao primeiro DT
// const proxDD = primeiroDt.nextElementSibling;
// // console.log(proxDD)

// // Substitua o conteúdo html de .faq pelo de .animais
// const animaiss = document.querySelector(".animais");
// faq.innerHTML = animaiss.innerHTML;

//Exercícios constructor
// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(nome, "Andou");
  };
}
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("Joao", 20);
const maria = new Pessoa("Maria", 15);
// Crie uma Constructor Function (Dom) para manipulação 
// de listas de elementos do dom. Deve conter as seguintes 
// propriedades e métodos: 
// 
// elements, retorna NodeList com os elementos selecionados 
// addClass(classe), adiciona a classe a todos os elementos 
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  console.log(elementList)
  this.elements = elementList
  this.addClass = function(classe){
    elementList.forEach((element) =>{
      element.classList.add(classe);
    })
  }
  this.removeClass = function(classe) {
    elementList.forEach((element) =>{
      element.classList.remove(classe)
    })
  }
}
const listaItens = new Dom('li')