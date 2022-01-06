function sCount() {
    let n1 = document.getElementById('startC').value
    let n2 = document.getElementById('finishC').value
    let pass = document.getElementById('passC').value

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

        const res = document.getElementById('resultado')
        res.innerHTML = '<h2>Contando:</h2><br>'

        if (n1<n2) {
            for(let i=n1;i<=n2;i+=pass) {
                res.innerHTML += ` ${i} \u{2192}`
            }
        } else {
            for(let i=n1;i>=n2;i-=pass) {
                res.innerHTML += ` ${i} \u{2192}`
            }
        }
        
        res.innerHTML += ` \u{1F3C1}`
    }
}