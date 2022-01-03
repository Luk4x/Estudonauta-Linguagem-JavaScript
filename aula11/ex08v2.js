document.body.style.backgroundColor = 'rgb(7, 139, 139)'
document.body.style.font = '1.3em Arial, sans-serif'

document.getElementById('btnVerificar').style.marginLeft = '20px'
document.getElementById('btnVerificar').addEventListener('click', calculate)

function calculate() {
    var vel = Number(document.getElementById('txtvel').value)
    var res = document.getElementById('resultado')
    res.innerHTML = `<p>Sua velocidade é de <strong>${vel}Km/h</strong>.</p>`
    if (vel>80) {
        res.innerHTML += `<p>Você está acima do limite de 80Km/h, portanto, será <strong>MULTADO</strong>. Dirija com mais cuidado.</p>`
    } else {
        res.innerHTML +=`<p>Continue a dirijir com cuidado.</p>`
    }
}