let totNum = []
let res = document.querySelector('div#resultado')

function receiveNum(num) {
    if (num.length==0) {
        alert('É necessário que digite um número.')
    } else if (Number(num)<1 || Number(num)>100) {
        alert('Este número não está entre 1 e 100.')
    } else if (totNum.indexOf(Number(num))!=-1) {
        alert('Este número já foi adicionado.')
    } else {
        addNum(Number(num))
        document.getElementById('iNum').value = ''
        document.getElementById('iNum').focus()
    }
}

function addNum(num) {
    totNum.push(num)
    let opt = document.createElement('option')
    opt.text = `Valor ${num} adicionado.`
    document.getElementById('sNum').appendChild(opt)
    res.innerHTML = ''
}

function finish() {
    if (totNum.length==0) {
        alert('É necessário que adicione valores antes de finalizar.')
    } else {
        res.innerHTML = `<p>Ao todo temos ${totNum.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${highestValue(totNum)}.`
        res.innerHTML += `<p>O menor valor informado foi ${lowestValue(totNum)}.`
        res.innerHTML += `<p>Somando todos os valores, temos ${sum(totNum)}`
        res.innerHTML += `<p>A média dos valores digitados é ${average(totNum, sum(totNum)).toFixed(2)}`
    }
}

function lowestValue(array) {
    let value = array[0]
    for (let i in array) {
        if (array[i]<value) {
            value=array[i]
        }
    }
    return value
}

function highestValue(array) {
    let value = array[0]
    for (let i in array) {
        if (array[i]>value) {
            value=array[i]
        }
    }
    return value
}

function sum(array) {
    let arraySum = 0
    for (let i in array) {
        arraySum+=array[i]
    }
    return arraySum
}

function average(array, arraySum) {
    arrayAverage=arraySum/array.length
    return arrayAverage
}