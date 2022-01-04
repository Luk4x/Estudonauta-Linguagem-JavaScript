function verifyData() {
    let year = new Date().getFullYear()
    let nasc = document.getElementById('iNasc').value

    if (nasc.length == 0 || Number(nasc)<(year-130) || Number(nasc)>year) {
        alert('<<ERRO>> Verifique os dados e tente novamente.')
    } else {
        const rsex = document.getElementsByName('radsex')
        let age = (year - Number(nasc))
        const res = document.getElementById('resultado')
        let img = document.createElement('img')
        img.setAttribute('id', 'photo')

        let genero = ''
        if (rsex[0].checked) {
            if (age>0 && age<=10) {
                // criança
                img.setAttribute('src', 'boy-child.png')
            } else if (age<=21) {
                // adolescente
                genero = 'um Menino'
                img.setAttribute('src', 'boy.png')
            } else if (age<50) {
                // adulto
                genero = 'um Homem'
                img.setAttribute('src', 'man.png')
            } else {
                // idoso
                genero = 'um Idoso'
                img.setAttribute('src', 'oldMan.png')
            }
        } else {
            if (age>0 && age<=10) {
                // criança
                img.setAttribute('src', 'girl-child.png')
            } else if (age<=21) {
                // adolescente
                genero = 'uma Menina'
                img.setAttribute('src', 'girl.png')
            } else if (age<50) {
                // adulto
                genero = 'uma Mulher'
                img.setAttribute('src', 'woman.png')
            } else {
                //idoso
                genero = 'uma Idosa'
                img.setAttribute('src', 'oldWoman.png')
            }
        }

        if (genero == '') {
            genero = 'uma Criança'
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Tem-se ${genero} com ${age} anos.`
        res.appendChild(img).style.padding = '10px'
        res.appendChild(img).style.width = '25rem'
        res.appendChild(img).style.height = '24rem'
        /*
        res.appendChild(img).style.clipPath = 'circle(50.0% at 50% 50%)'
        */
    }
}