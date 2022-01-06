function loadMainElements(){
    const msg = document.getElementById('msg')
    const img = document.getElementById('image')
    
    let hour = new Date().getHours()
    msg.innerHTML = `Agora são ${hour} horas.`

    if (hour>4 && hour<12) {
        img.src = 'fotoManhaPNG.png'
        document.body.style.background = 'radial-gradient(rgb(254, 190, 126), rgb(170, 116, 62))'
    } else if (hour>=12 && hour<=18) {
        img.src = 'fotoTardePNG.png'
        document.body.style.background = 'radial-gradient(rgb(223, 107, 76), rgb(143, 69, 49))'
    } else {
        img.src = 'fotoNoitePNG.png'
        document.body.style.background = 'radial-gradient(rgb(75, 137, 236), rgb(36, 72, 129))'
    }
}