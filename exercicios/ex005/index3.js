
var a = new Date()
var hora = a.get()
console.log(`agora são ${hora} horas `)
if (hora <= 12 && hora >= 6) {
    console.log('Bom dia')
} else if (hora >= 13 && hora <=17) {
    console.log('Boa tarde')

} else if (hora >= 18 || hora <= 5) {
    console.log('boa noite')
}  
