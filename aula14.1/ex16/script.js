function sCount() {
    var n1 = document.getElementById('startC').value
    var n2 = document.getElementById('finishC').value
    var pass = document.getElementById('passC').value
    if (n1.length==0 || n2.length==0 || pass.length==0) {
        alert('Preencha todos os campos.')
    } else if (Number(n1)==Number(n2)) {
        alert('Inicio e Fim devem conter valores diferentes.')
    } else {
        n1=Number(n1)
        n2=Number(n2)
        pass=Number(pass)
        if (pass==0) {
            alert('Passo inválido, considerando passo 1.')
            pass=1
        } else if (pass<0) {
            pass*=-1
        }
        var res = document.getElementById('resultado')
        res.innerHTML = 'Contando:<br>'
        if (n1<n2) {
            for(var i=n1;i<=n2;i+=pass) {
                res.innerHTML += ` ${i} \u{1F449}`
            }
        } else {
            for(var i=n1;i>=n2;i-=pass) {
                res.innerHTML += ` ${i} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}