var agora = new Date(); // cria um objeto do tipo data

var hora = agora.getHours(); // pega a hora atual do objeto data
console.log(`agora são ${hora}`)

if (hora < 12) {
    console.log(`Bom dia`)

} else if ( hora <= 18) {
    console.log(`Boa Tarde`)

} else {
    console.log(`Boa Noite`)
}

