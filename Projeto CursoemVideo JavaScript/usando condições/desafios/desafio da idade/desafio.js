function Verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var iAno = document.querySelector('#txtano');
    var img = document.querySelector('#imagem')
    var res = document.querySelector('#res');

    if(iAno.value.length == 0 || iAno.value > ano ){
        window.alert('[Error] Algo deu errado, tente novamente.');
    }
    else{
        var fSex = document.getElementsByName('radSex');
        var idade = ano - Number(iAno.value);
        var genero = '';

        if(fSex[0].checked){
            genero = 'Masculino';

            if(idade >= 0 && idade <= 3){
                res.innerHTML = `<p>Detectamaos um bebê do gênero ${genero}, com a idade de ${idade} anos.`;
                img.src  = 'img/bebe.png'
            }
            else if(idade >= 4 && idade <= 10){
                res.innerHTML = `<p>Detectamaos uma criança do gênero ${genero}, com a idade de ${idade} anos.`;
                img.src  = 'img/criança.png'
            }
           else  if(idade >= 11 && idade <= 17){
                res.innerHTML = `<p>Detectamaos um jovem do gênero ${genero}, com a idade de ${idade} anos.`;
                img.src  = 'img/jovem.png'
            }
           else  if(idade >= 18 && idade <= 54){
                res.innerHTML = `<p>Detectamaos um adulto do gênero ${genero}, com a idade de ${idade} anos.`;
                img.src  = 'img/adulto.png'
            }
            else if(idade >=  55 && idade <= 120){
                res.innerHTML = `<p>Detectamaos um  senhor do gênero ${genero}, com a idade de ${idade} anos.`;
                img.src  = 'img/velho.png'
            }
            if(idade >= 121){
                res.innerHTML = `<p>Detectamaos uma mumia do gênero ${genero}, com a idade de ${idade} anos.`;
                img.src  = 'img/mumia.png'
            }
        }
        if(fSex[1].checked){
            genero = 'Feminino';

            if(idade >= 0 && idade <= 3){
                res.innerHTML = `<p>Detectamaos um bebê do gênero ${genero}, com a idade de ${idade} anos.`;
                img.src  = 'img/bebe.png'
            }
            else if(idade >= 4 && idade <= 10){
                res.innerHTML = `<p>Detectamaos uma criança do gênero ${genero}, com a idade de ${idade} anos.`;
                img.src  = 'img/criançaF.png'
            }
           else  if(idade >= 11 && idade <= 17){
                res.innerHTML = `<p>Detectamaos uma jovem do gênero ${genero}, com a idade de ${idade} anos.`;
                img.src  = 'img/jovemF.png'
            }
           else  if(idade >= 18 && idade <= 54){
                res.innerHTML = `<p>Detectamaos uma adulta do gênero ${genero}, com a idade de ${idade} anos.`;
                img.src  = 'img/adulta.png'
            }
            else if(idade >=  55 && idade <= 120){
                res.innerHTML = `<p>Detectamaos uma  senhora do gênero ${genero}, com a idade de ${idade} anos.`;
                img.src  = 'img/velha.png'
            }
            if(idade >= 121){
                res.innerHTML = `<p>Detectamaos uma mumia do gênero ${genero}, com a idade de ${idade} anos.`;
                img.src  = 'img/mumia.png'
            }
        }
        
    }
            
            
}
        
