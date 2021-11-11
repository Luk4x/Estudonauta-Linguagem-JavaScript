function parimp(n) {
    if (n%2==0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

function sum(n1=0, n2=0) { // considera 0 em caso de undefined.
    return n1+n2
}

let doubleV = function doubleF(n) {
    return n*2
}

function factorial(n) {
    let fat = n
    for(let i=n-1;i>1;i--) {
        fat*=i
    }
    return fat
}

function countDown(n) {
    if (n>=0) {
        console.log(n)
        countDown(n-1)
    }
}

let num1 = Math.floor(Math.random()*10)
let tipo1 = parimp(num1)
console.log(`número1: ${num1}\ntipo1: ${tipo1}\n`)

let num2 = Math.floor(Math.random()*10)
let tipo2 = parimp(num2)
console.log(`número2: ${num2}\ntipo2: ${tipo2}\n`)

console.log(`soma: ${sum(num1, num2)}\ntipoSoma: ${parimp(sum(num1, num2))}`)
let soma = sum(num1, num2)
console.log(`dobroSoma: ${doubleV(soma)}\nfatorialSoma: ${factorial(soma)}\ncontagemRegressivaSoma:`)
console.log(countDown(soma))