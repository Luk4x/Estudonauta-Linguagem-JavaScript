function verifyData() {
    var year = new Date().getFullYear()
    var nasc = document.getElementById('iNasc').value

    if (nasc.length == 0 || Number(nasc)<(year-130) || Number(nasc)>year) {
        alert('<<ERRO>> Verifique os dados e tente novamente.')
    } else {
        var rsex = document.getElementsByName('radsex')
        var age = (year - Number(nasc))
        var res = document.getElementById('resultado')
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')

        if (rsex[0].checked) {
            var genero = 'um Homem'
            if (age>0 && age<=10) {
                // criança
                img.setAttribute('src', 'boy-child.png')
            } else if (age<=21) {
                // adolescente
                img.setAttribute('src', 'boy.png')
            } else if (age<50) {
                // adulto
                img.setAttribute('src', 'man.png')
            } else {
                // idoso
                img.setAttribute('src', 'oldMan.png')
            }
        } else {
            var genero = 'uma Mulher'
            if (age>0 && age<=10) {
                // criança
                img.setAttribute('src', 'girl-child.png')
            } else if (age<=21) {
                // adolescente
                img.setAttribute('src', 'girl.png')
            } else if (age<50) {
                // adulto
                img.setAttribute('src', 'woman.png')
            } else {
                //idoso
                img.setAttribute('src', 'oldWoman.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Temos ${genero} com ${age} anos.`
        res.appendChild(img).style.padding = '10px'
        res.appendChild(img).style.width = '25rem'
        res.appendChild(img).style.height = '20rem'
        res.appendChild(img).style.clipPath = 'circle(50.0% at 50% 50%)'
    }
}