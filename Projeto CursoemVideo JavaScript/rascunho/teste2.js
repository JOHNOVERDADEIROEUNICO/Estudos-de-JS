function Salvar(){
    let num = document.getElementById('bNumber');
    let tab = document.getElementById('seleTab');
    let array = [];
    let e = End();

    if(num.value.length == 0 || Number(num.value) < 0 || Number(num.value) > 100){
        window.alert('Por favor, digite um número entre 0 á 100.')
    }
    else{ 
        numNumber = Number(num.value)
        
        let item = document.createElement('option');
        item.text = `O número ${numNumber} foi gerado e salvo com sucesso`;
        item.value = `tab${c}`;
        tab.appendChild(item);
        
    }
}