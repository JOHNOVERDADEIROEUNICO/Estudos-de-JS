function ParImpar(n){
    if(n%2  == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(ParImpar(3));

//Diferente do c# e indéntico ao python, o JS aceita pré definições nos parâmetros:
function Soma(n1 =  0, n2 = 0){
   return n1 + n2;
}

console.log(Soma());

console.log(Soma(2, 3));

//Podemos também fazer uma variável receber uma função:
let v = function(x){
    return x*2
}

console.log(v(5));