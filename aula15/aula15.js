let num = [5,8,4]
console.log(`Vetor num:\n\natual índice 1: ${num[1]}`)
console.log(`todos os índices: ${num}`)
num[3] = 9
num.push(6)
console.log(`todos os índicesv2: ${num}\nquantidade de posições: ${num.length}\norganizado: ${num.sort()}\n\n`)

let num1 = [5,7,8,9,0,3,4,6,8,2]
console.log(`Vetor num1:\n\natual índice 1: ${num1[1]}\ntodos os índices:`)
for (let i=0;i<num1.length;i++) {
    console.log(`posição ${i} = ${num1[i]}`)
}
num1.push(1)
num1.sort()
console.log(`\n9?: ${num1.indexOf(9)}\n12?: ${num1.indexOf(12)}\n`)
console.log('todos os índicesv2 (organizados):')
for (let i in num1) {
    console.log(`posição ${i} = ${num1[i]}`)
}
console.log(`quantidade de posições: ${num1.length}`)