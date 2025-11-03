function Contar(){
    var inicio = document.getElementById('Inicio');
    var fim = document.getElementById('Fim');
    var passo = document.getElementById('Passo');
    var res = document.getElementById('Res');

    var nInicio = Number(inicio.value);
    var nFim = Number(fim.value);
    var nPasso = Number(passo.value);

    if(nPasso == 0 || nPasso < 0 || nPasso > nFim && nPasso > nInicio || nInicio <=0 || nFim <= 0){
        window.alert('Valores inválidos, tente novamente!');
    }
    else if(nInicio < nFim && nPasso > 0){
        for (var c = nInicio; c <= nFim; c += nPasso){
            if(c == nInicio){
                res.innerHTML = '<p>Começou!</p>';
                res.innerHTML += 'Contando: ';
            }

            res.innerHTML += `${c} \u{1F449}`;

            if(c == nFim)
                res.innerHTML += `\u{1F3c1}`;
        }
    }
    else if(nInicio > nFim && nPasso > 0){
        for (var c = nInicio; c >= nFim; c -= nPasso){
            if(c == nInicio){
                res.innerHTML = '<p>Começou!</p>';
                res.innerHTML += 'Contando: ';
            }

            res.innerHTML += `${c} \u{1F449}`

            if(c == nFim)
                res.innerHTML += `\u{1F3c1}`;
        }
    }
   
}
