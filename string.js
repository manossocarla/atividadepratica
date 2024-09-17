var nome = "Marcelo da Silva";
var x = nome.length;
console.log(x);
// length tamanho

// resultado = x > 15 ? "obrigado!" : (caso contrário) "Por favor preencha seu nome completo"
resultado = x > 15 ? "obrigado" : "Por favor preencha seu nome completo"
console.log(resultado);
// colocar o nome todo em caixa alta
var res = nome.toLocaleUpperCase();
console.log(res);
// descobrir qual a posição de determinada palavra
var jogo = "Barcelona vs Real melhor time";
var posição = jogo.indexOf("Real");
console.log(posição);
// cortar uma frase até determinada parte
var cortado = jogo.slice(0,9);
console.log(cortado);
// ver se existe uma determinada palavra na frase
var val = jogo.includes("Real");
console.log(val);
// concatenar dois strings
var str1 = "Hello";
var str2 = " turma";
var str3 = str1.concat(str2);
console.log(str3);

var frase = "             Olá, você está aprendendo javascript";
console.log(frase.trim());
var num = "1,2,3,4,5,6,7,8,9"
var arr = num.split(",");
console.log(arr);
console.log(arr[4]); //posição