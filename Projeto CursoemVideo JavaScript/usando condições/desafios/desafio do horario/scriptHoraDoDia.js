function Carregar(){
    var mensagem = document.querySelector('#msg');
    var img = document.querySelector('#imagem');
    var section = document.querySelector('#section')
    var body = document.querySelector('#body')
    var footer= document.querySelector('#pe')
    var hearder = document.querySelector('#head')
    

    var data = new Date();
    
    //var dataAgora = data.getHours();

    var hora = 20;

    if((hora >= 6 && hora <= 12.59)){
        mensagem.innerHTML = '<p>Bom Dia!</p>';
        img.src = 'manhã.png';
 
        body.style.background = '#fffda1ff'
        section.style.background = '#f4d90eff'
        hearder.style.color = '#211e04ff'
        footer.style.color = '#0f0f0bff'
        mensagem.style.color = '#0f0f0bff'
        
    }
    else if((hora >= 13 && hora <= 17.59)){
        mensagem.innerHTML = '<p>Bom Tarde!</p>';
        img.src = 'tarde.png';

        body.style.background = '#e8890dff'
        section.style.background = '#f4d90eff'
        hearder.style.color = '#211e04ff'
        footer.style.color = '#0f0f0bff'
        mensagem.style.color = '#0f0f0bff'
    }
    else if((hora >= 18 && hora <= 23 || hora < 6)){
        mensagem.innerHTML = '<p>Bom Noite!</p>';
        img.src = 'Design sem nome.png';

        body.style.background = '#27acf3ff'
        section.style.background = '#2741e8ff'
        hearder.style.color = '#fefdf5ff'
        footer.style.color = '#fbfbf7ff'
        mensagem.style.color = '#f7fafeff'
    }
    else{
        mensagem.innerHTML = '<p>Hora inexistente.</p>';
        img.src = 'none';

        body.style.background = '#fc0000ff'
        section.style.background = '#e7fb0dff'
        hearder.style.color = '#fefdf5ff'
        footer.style.color = '#fbfbf7ff'
        mensagem.style.color = '#080a0cff'
        
    }


}