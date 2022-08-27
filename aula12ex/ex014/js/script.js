function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    //var hora = 22
    var min = agora.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora < 6){
        //madrugada
        img.src = 'imagens/madrugadaed.png'
        document.body.style.background = '#3851ae'
    } else if (hora < 12){
        //Bom dia
        img.src = 'imagens/manhaed.png'
        document.body.style.background = '#c08d64'
    } else if (hora < 18){
        //Boa tarde
        img.src = 'imagens/tardeed.png'
        document.body.style.background = '#c7410f'
    } else {
        //Boa noite.
        img.src = 'imagens/noiteed.png'
        document.body.style.background = '#60486c'
    }
}