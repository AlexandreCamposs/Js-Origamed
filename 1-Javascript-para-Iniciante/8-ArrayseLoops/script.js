//1- Crie uma array com os anos que o Brasil ganhou a copa 
var copas  = [1959, 1962, 1970, 1994, 2002];
// console.table(copas);


//2- Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${a 

for(var i = 0; i < copas.length; i++){
    console.table(`O Brasil ganhou a copa de ${copas[i]}`)
}


//3- Interaja com um loop nas frutas abaixo e pare ao chegar em Pervar frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']  
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (i = 0; i < frutas.length; i++){ 
    // console.log(frutas[i]);
    if (frutas[i] === 'Maçã') {
        break;
    }
}


//4- Coloque a última fruta da array acima em uma variável,  sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length -1];
console.log(ultimaFruta)
// console.table(frutas); 