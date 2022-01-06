let people = {
    name: 'Lucas',
    sex: 'M',
    weight: 60.4,
    gain(w) {
        this.weight+=w
    }
}

console.log(`${people.name} pesa ${people.weight}`)
people.gain(2)
console.log(`${people.name} engordou para ${people.weight}kg`)