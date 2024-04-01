//////////////////TAMANHO DA PAGINA//////////////////////////

//declarar fora da função e só chamar depois
var largura = 0
var altura = 0

//ajustes dinâmicos - função apara obter as dimensões da janela do navegador e, em seguida, 
//atribui esses valores às variáveis largura e altura, respectivamente.
function ajustaTamanhoPalcoJogo() {
    largura = window.innerWidth
    altura = window.innerHeight

    console.log('largura:' + largura, 'altura:' + altura)//x-larg y-alt
}

ajustaTamanhoPalcoJogo()





//////////////////POSICAO ALEATORIA DO MOSQUITO//////////////////////////

//função encapisulada criada para chamar la na pagina html no body, pois o script esta sendo lido no head
function posicaoRandomica() {

    //valor produzido de força aleatória em dois eixos
    var posicaoX = Math.floor(Math.random() * largura) - 90 //-90px para a mosca não sumir devido termos dado 50px para ela
    var posicaoY = Math.floor(Math.random() * altura) - 90 //-90px para a mosca não sumir devido termos dado 50px para ela

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)


    //criar o elemento hmtl
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)

    console.log(ladoAleatorio())

}



//////////////////TAMANHO ALEATORIO DO MOSQUITO//////////////////////////

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3) //random vai de 0 ate perto de 1. nesse caso forçamos ir aate 2 pois arredondamos com o floor
    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}



//////////////////TAMANHO ALEATORIO DO MOSQUITO//////////////////////////

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2) //random vai de 0 ate perto de 1. nesse caso forçamos ir ate 1 pois arredondamos com o floor
    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}
