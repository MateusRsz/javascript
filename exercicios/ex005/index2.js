var idade = 47

if (idade < 16) {
    console.log('não vota')

} else if (idade < 18 || idade >= 67) {
    console.log('Voto opcional')
} else if (idade >= 18) {
    console.log('voto Obrigatorio')
}