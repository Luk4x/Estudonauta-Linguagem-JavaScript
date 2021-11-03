function loadMainElements(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var hour = new Date().getHours()
    msg.innerHTML = `Agora são ${hour} horas.`
    if (hour>4 && hour<12) {
        img.src = 'fotoManhaPNG.png'
        document.body.style.background = 'rgb(254, 190, 126, 0.9)'
    } else if (hour>=12 && hour<=18) {
        img.src = 'fotoTardePNG.png'
        document.body.style.background = 'rgb(223, 107, 76, 0.9)'
    } else {
        img.src = 'fotoNoitePNG.png'
        document.body.style.background = 'rgb(42, 81, 142, 0.9)'
    }
}