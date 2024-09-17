var valores = [8,1,7,2,9];
console.log(valores[0])
console.log("Array invertido:" +valores.reverse() );

var arr1 = [1,2,3,4,5,6];
console.log(arr1.join('|'));
//retirar o primeiro elemento de um array
var retirado = arr1.shift();
console.log(retirado);
console.log(arr1);
console.log("Posição do número 3:" + arr1.indexOf(3));
// acrescentar um número no array (push)
arr1.push(7);
console.log(arr1);
// retirar o último elemento do array
arr1.pop();
console.log(arr1);
var arr2 = [8,7,6,5,4,3,2,1];
arr2.splice(1,1);
console.log(arr2);
var nomes = ["Maria","Lucas", "João", "Pedro"];
console.log(nomes);
var novos = nomes.splice(1,1, "Luíz");
console.log(nomes);
var país = ["Brasil", "Argentina", "Colômbia"];
//adicionar um elemento no início unshift 
país.unshift("Uruguai");
console.log(país);
var names = ["Guilherme", "Manoel","Samuel","Davi", "João"];
//acrescentar Mônica
names.unshift("Mônica");
console.log(names);
//remover o último elemento do array
names.pop();
console.log(names);
// encontrar a posição do Manoel
// trocar o Manoel por Emanuel
var pessoa = ["Eduardo","Joana","Wallace","Rosana"];
var pessoa1= pessoa.slice(1,3);
var gerente = ["Davi", "Manoela"];
var empresa = pessoa.concat(gerente);
console.log(empresa);
console.log(pessoa);
console.log(pessoa1);


