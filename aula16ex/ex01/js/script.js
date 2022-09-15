let fnum = document.querySelector('input#txtn')
let flist = document.querySelector('select#list')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(fnum.value) && !inList(fnum.value, valores)){
        window.alert('Tudo ok!')
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}