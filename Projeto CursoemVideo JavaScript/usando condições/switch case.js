var agora = new Date();
var diaSem = agora.getDay();

 //Curiosidade, a classe data não trabalha com os nomes dos dias, ela consegue pegar o dia espécifico, porém, só retorna um número de 0-6, sendo do Domingo até o Sabaton. Tendo isso em mente sabemos que um if-else if vai ser muito longo, então vamos usar um switch e consequentemente aprender sua sintaxe em JS:

switch(diaSem){
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    case 6:
        console.log("Sabado");
        break;
    default:
        console.log("Algo deu errado, tente novamente.");
        break;
}//Perceba que o switch é indéntico ao c#, afinal ambas linguagens são baseadas em C.