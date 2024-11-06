
let num = [1,33,2,4,9]
num.sort()
/*
for (let indice=0 ; indice<num.length ; indice += 2  ) {
    console.log(num[indice])
}
*/

for (let pos in  num) {
    console.log(`indice ${pos} e valor do array ${num[pos]}`)
}

