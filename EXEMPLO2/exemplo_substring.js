
var s = "javascript e Python"
var pos1 = s.indexOf("Python");
console.log(pos1);
//formar uma nova string 
var novaString = s.substring(13,19);
console.log(novaString);

var frase = "Olá mundo!"
if (frase.startsWith("Olá")){
    let sub = frase.substring(4,);
    let novaString = sub.replace("mundo", "pessoal")
    let novaStringMaiuscula = novaString.toLocaleUpperCase();
    console.log(novaStringMaiuscula);
}