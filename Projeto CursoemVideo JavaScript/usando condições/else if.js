var velocidade = 81;

if(velocidade <= 80 )
    console.log(`Velocidade: ${velocidade}KM. Dentro do limite estabelecido, tenha um bom dia!`);
else if(velocidade > 80 && velocidade < 85)
    console.log(`Velocidade: ${velocidade}KM. Você excedeu o limte de velocidade de até 80KM, porém esteve na margem de erro de até 84KM, CUIDADO!`);
else
    console.log(`Velocidade: ${velocidade}KM. Você excedeu o limite de velocidade de até 80KM por hora e foi multado. Faça o L e tudo se resolverá.`);