function Tabuada(){
    let num = document.getElementById('bNumber');
    let tab = document.getElementById('seleTab');

    if(num.value.length == 0){
        window.alert('Por favor, digite um número.')
    }
    else{
        let res = 0;
        numNumber = Number(num.value)
         let item = document.createElement('option');
        tab.innerHTML = ' '
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option');

            res = numNumber * c;
            item.text = `${numNumber} x ${c} = ${res}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
        }
    }
}