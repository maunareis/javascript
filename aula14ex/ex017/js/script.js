function gerar(){
    var n = document.querySelector('input#num')

    if (n.value.length == 0){
        window.alert(`Por favor, digite um número!`)
    } else {
            while (c<=10){
                var mult = n.value 
                var res = mult * c
                res.innerHTML = `${res}`
            }
    }

       // res.innerHTML = n.value
    }


/*
for(var c = 1; c = 10; c++){
                var res = n.value * c
                res.innerHTML = res
                */


