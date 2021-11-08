function calculateT() {
    var num = document.getElementById('tNum').value
    if (num.length==0) {
        alert('É necessário informar um número.')
    } else {
        num = Number(num)
        var res = document.getElementById('resultado')
        res.innerHTML = ''
        for(var i=1;i<=10;i++) {
            res.innerHTML += `<option value="${num}X${i}">${num} x ${i} = ${num*i}</option>`
        }
    }
}