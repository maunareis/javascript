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
    if(isNumero(fnum.value) && !inList(fnum.value, valores)){//se for realmente um número e se esse número não está na lista
        valores.push(Number(fnum.value)) // adiciona no vetor o número digitado
        let item = document.createElement('option') // cria o elemento option
        item.text = `Valor ${fnum.value} adicionado.` // escreve dentro do ultimo item adicionado
        flist.appendChild(item) //cria um elemento filho

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    fnum.value = `` // para apagar automaticamente valor digitado
    fnum.focus() // faz com que o cursor volte para o local de digitação
}