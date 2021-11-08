function calculateT() {
    var num = document.getElementById('tNum').value
    if (num.length==0) {
        alert('É necessário informar um número.')
    } else {
        num = Number(num)
        var res = document.getElementById('resultado')
        res.innerHTML = ''
        for(var i=1;i<=10;i++) {
            var opt = document.createElement('option')
            opt.text = `${num} x ${i} = ${num*i}`
            opt.value = `v${i}`
            res.appendChild(opt)
            // res.innerHTML += `<option value="v${i}">${num} x ${i} = ${num*i}</option>`
        }
    }
}