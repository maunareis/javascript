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
}


//