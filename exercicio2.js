var bebidaEscolhida = "café";
let valor = "";
switch(bebidaEscolhida) {
    case "café":
    valor = 2,75;
    break;
    case "leite":
    valor = 2,50;ó 
    break;
    case "chá":
    valor = 2,50
    break;
    default:
    console.log("Escolha inválida.Escolha entre café, leite ou chá");

}
    console.log(`Você escolheu ${bebidaEscolhida} e o valor a ser pago é R$ ${valor.toFixed(2)}.`);