function Contar(){
    let num = document.getElementById('bNumber');
    let tab = document.getElementById('seleTab');
    let array = [];
    let texto = document.getElementById('text')

    function Salvar(){
        if(num.value.length == 0 || Number(num.value) < 0 || Number(num.value) > 100){
            window.alert('Por favor, digite um número entre 0 á 100.')
        }
        else if(array.indexOf(Number(num.value)) != -1){
            window.alert(`O número já foi digitado, digite outro por favor.`)
        }
        else{ 
            numNumber = Number(num.value)
            array.push(numNumber)
            
            let item = document.createElement('option');
            item.text = `O número ${numNumber} foi gerado e salvo com sucesso`;
            
            tab.appendChild(item);
            texto.innerHTML = ' '
        }

        num.value = ' ';
        num.focus();
    }
    function Show(){
        if(array.length == 0){
            window.alert('Você não digitou valores!')
        }
        else{
            const initialValue = 0;

            const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

            const media = sum/array.length;

            texto.innerHTML = `<p>Os valores digitados foram: ${array}</p>`
            
            texto.innerHTML += `<p>A soma de todos os valore é: ${sum}</p>`

            texto.innerHTML += `<p>A média dos valores é: ${media}`
        }
    }

    return{
        Salvar,
        Show
    }
}

const s = Contar();