function verifyData() {
    var year = new Date().getFullYear()
    var nasc = document.getElementById('inputNasc').value
    var res = document.querySelector('div#resultado')
    if (nasc.length == 0 || Number(nasc)>year) {
        alert("erro")
    } else {
        alert('ok')
    }
}