var números = [1,2,3,4,5,6,7,8,9,10];

var nums = números.map(function(valor){
return valor * 2;
});
console.log(nums);

var funcionarios = [
    {nome: "Luíz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Pedro", idade: 31},
    {nome: "Alberto", idade:50},
]
nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes);


var total = 0;
for(var i = 0; i < números.length;i++){
    total += números[i];
}
console.log(total);

var tot = números.reduce(function(total,numero){

}, 0);
console.log(tot);