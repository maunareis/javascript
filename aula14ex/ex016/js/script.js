function contar(){
    let ini = document.querySelector('input#inicio')
    let fim = document.getElementById('fim')
    let pass = document.querySelector('input#passo')
    let res = document.getElementById('res')

        if(ini.value.length ==0 || fim.value.length == 0 || pass.value.length == 0){
            res.innerHTML = `Impossivel contar`
        } else {
            res.innerHTML = 'Contando:'
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(pass.value)
            
            if(i < f){
                for( let c = i; c <= f ; c+= p){
                    res.innerHTML += `${c} \u{1F449}`
                }
                res.innerHTML += `\u{1F3C1}`
            } else {
                for( let c = f; c <= i ; c-= p){
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
            
        }
}
