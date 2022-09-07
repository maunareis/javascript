function contar(){
    var ini = document.querySelector('input#inicio')
    var fim = document.getElementById('fim')
    var pass = document.querySelector('input#passo')
    var res = document.getElementById('res')

        if(ini.value.length ==0 || fim.value.length == 0){
            res.innerHTML = `Impossivel contar`
        } else {
            var n = ini.value
            for( var n ; n <= fim.value ; pass.value++){
                res.innerHTML = `valor ${n}`
            }
           
        }
}

// for( ini.value; n <= fim.value ; pass++)




/*
var dif = fim.value - ini.value
            res.innerHTML = `valor ${dif}`


if(ini.value.length ==0 || fim.value.length == 0){
            res.innerHTML = `Impossivel contar`
        } else if (pass.value.length == 0){
            window.alert('Passo inválido! Considerando Passo 1!')
        }

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

            if (fsex[0].checked){
                genero = 'Mulher'
                    if (idade >= 0 && idade < 4){
                       img.setAttribute('src', 'imagens/bebemenina.png')
                    }else if (idade < 10){
                        img.setAttribute('src', 'imagens/menina.png')
                        //img.src = crianca
                    } else if (idade < 31){
                        img.setAttribute('src', 'imagens/jovemmulher.png')
                        //jovem 
                    } else if (idade < 60){
                        img.setAttribute('src', 'imagens/mulher.png')
                       // mulher
                    }else {
                        img.setAttribute('src', 'imagens/senhora.png')
                        //senhora
                    }
            } else if (fsex[1].checked){
                genero = 'Homem'
                    if (idade >= 0 && idade < 4){
                        //bebe
                        img.setAttribute('src', 'imagens/bebemenino.png')
                    }else if (idade < 10){
                        //img.src = crianca
                        img.setAttribute('src', 'imagens/menino.png')
                    } else if (idade < 31){
                        //jovem 
                        img.setAttribute('src', 'imagens/jovemhomem.png')
                    } else if (idade < 60){
                    // mulher
                    img.setAttribute('src', 'imagens/homem.png')
                    }else {
                        //senhora
                        img.setAttribute('src', 'imagens/senhor.png')
                    }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
    }
    */
