let num = [5, 7, 9, 27];

console.log(`O nosso vetor é: [${num}]`);

//Adicionando valores:
//Duas formas pela posição:
num[4] = 6
num[0] = 1

console.log(`O nosso vetor é: [${num}]`);

//Perceba que ao colocarmos uma posição já existente ele não adiciona aquela posição jogando a anterior para o lado, pelo contrário, a substitui.

//Também podemos usar o método push() que adiciona uma nova posição:

num.push(2);

console.log(`O nosso vetor é: [${num}]`);

//métodos como length, sort (transforma em ordem crescente) também existem.

//O método indexOf passa como argumento o elemento existente e retorna onde se encontra sua posição, se caso não existir o elemento ele retorna -1 que em JS significa que não existe este valor:
console.log(num.indexOf(27));

console.log(num.indexOf(8));