var país = "Brasil";

if(país != "Brasil"){
    console.log("você é estrangeiro");
}else{
    console.log("você é brasileiro");
}


var diaSem = 1;
switch(diaSem){
    case 1:
        console.log("Domingo");
        break; //se ele encontra a situação tem que colocar o break
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    default: // caso ele não encontre nenhuma das situações provaveis
    console.log("Esse dia da semana não existe!")
}