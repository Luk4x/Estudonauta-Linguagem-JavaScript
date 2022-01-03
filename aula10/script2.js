document.body.style.font = '1.5em Arial, sans-serif'
document.body.style.backgroundColor = 'blueviolet'
document.getElementById('resultado').style.marginTop = '30px'

function sum() {
    var n1 = document.getElementById('n1').value
    var n2 = document.querySelector('input#n2').value
    document.getElementById('resultado').innerHTML = `Resultado de ${n1} + ${n2} = <strong>${Number(n1)+Number(n2)}</strong>`
}

/* 
function sum(n1, n2) {
    document.getElementById('resultado').innerHTML = `Resultado de ${n1.value} + ${n2.value} = <strong>${Number(n1.value)+Number(n2.value)}</strong>`
}
*/