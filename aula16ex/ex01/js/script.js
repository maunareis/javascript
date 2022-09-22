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
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    fnum.value = `` // para apagar automaticamente valor digitado
    fnum.focus() // faz com que o cursor volte para o local de digitação
}

function finalizar(){
    if(valores.length ==0 ) {
        window.alert(`Adicione valores antes de finalizar!`)
    } else {
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
            
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p> A media dos valores informados é ${media.toFixed(2)}.</p>`
    }
}