let num = [5,8,2,9,3]
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`Oprimeiro valor do vetor é ${num[0]}`)

num.sort()
console.log(num)
console.log(`Oprimeiro valor do vetor é ${num[0]}`)

for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}