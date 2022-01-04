document.body.style.backgroundColor = 'rgb(48, 116, 199)'
document.body.style.font = '1.3em Arial, sans-serif'

function verifyNasc() {
    let pais = document.getElementById('nasc').value.toUpperCase()
    const res = document.getElementById('resultado')
    res.innerHTML = `<p>Nascendo em <strong>${pais}</strong>, você é:</p>`
    if (pais == 'BRASIL' || pais == 'BR') {
        res.innerHTML += '<p><strong>BRASILEIRO!</strong></p>'
    } else {
        res.innerHTML += '<p><strong>ESTRANGEIRO!</strong></p>'
    }
}