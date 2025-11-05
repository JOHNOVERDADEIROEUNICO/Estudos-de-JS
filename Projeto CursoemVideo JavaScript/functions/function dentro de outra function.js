function Teste() {

    let ar = []

    function end(a = 0){
        
        ar.push(a);

        console.log(ar)
    }

    return{
        end
    }
}

const x = Teste();

x.end(5)
x.end(6)