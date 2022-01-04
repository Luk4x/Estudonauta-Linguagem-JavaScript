let hour = new Date().getHours()
console.log(`Agora são ${hour} horas.`)
if (hour>=5 && hour<12) {
    console.log('Bom dia.')
} else if (hour>=12 && hour<=18) {
    console.log('Boa Tarde.')
} else if (hour>=19 && hour<=23) {
    console.log('Boa noite.')
} else {
    console.log('Bom Madrugada.')
}