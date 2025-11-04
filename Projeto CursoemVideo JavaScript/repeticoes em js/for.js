for(var c = 0; c <=10; c++){
    console.log(`passo ${c}`);
}

//Temos também em JS o For In:

const num = [1, 2, 3, 4, 5];

for(let pos in num){
    console.log(`cada elemento por vez: ${num[pos]}`)
}