let c1=1
while (c1<=10) {
    console.log(c1)
    c1++
}
console.log()

do {
    c1--
    console.log(c1)
} while (c1>1)
console.log()

let c2=0
do {
    c2++
    while (c1<=10 || c1<=20) {
        console.log(c1)
        c1++
    }
} while (c2<=2)
console.log()

for (let c3=20;c3>=1;c3--) {
    console.log(c3)
}