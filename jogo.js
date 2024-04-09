//////////////////////////////TAMANHO DA PAGINA/////////////////////////////

//declarar fora da função e só chamar depois
var largura = 0
var altura = 0

var vidas = 1

var tempo = 10 //10segundos

var criaMosquitoTempo = 1500



var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
    criaMosquitoTempo = 750
}







//ajustes dinâmicos - função apara obter as dimensões da janela do navegador e, em seguida, 
//atribui esses valores às variáveis largura e altura, respectivamente.
function ajustaTamanhoPalcoJogo() {
    largura = window.innerWidth
    altura = window.innerHeight

    console.log('largura:' + largura, 'altura:' + altura)//x-larg y-alt
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function () {
    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro) //para não ficar dentro do alert 
        //e continua criando os mosquitos porque la na pagina html tem a funçao de criar o mosquito
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'

    } else {
        document.getElementById('cronometro').innerHTML = tempo //ele une a logica com o texto html
    }


}, 1000)//a cada 1 segundo vai decrementar 1



//////////////////POSICAO ALEATORIA DO MOSQUITO//////////////////////////

//função encapisulada criada para chamar la na pagina html no body, pois o script esta sendo lido no head
function posicaoRandomica() {

    //remover o mosquito anterior (caso exista) de forma automatica caso não seja clicado entra nessa logica
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove() //chama pelo id e remove

        if (vidas > 3) {//direciona para essa pagina
            window.location.href = 'fim_de_jogo.html'
        }

        //console.log('v' + vidas)
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"


        vidas++
    }

    //valor produzido de força aleatória em dois eixos
    var posicaoX = Math.floor(Math.random() * largura) - 90 //-90px para a mosca não sumir devido termos dado 50px para ela
    var posicaoY = Math.floor(Math.random() * altura) - 90 //-90px para a mosca não sumir devido termos dado 50px para ela

    posicaoX = posicaoX < 0 ? 0 : posicaoX //Se posicaox for menor que 0, então o valor de posicaox é substituído por 0.
    posicaoY = posicaoY < 0 ? 0 : posicaoY //Se posicaoY for menor que 0, então o valor de posicaoY é substituído por 0.

    console.log(posicaoX, posicaoY)


    //criar o elemento hmtl
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    //quando clicar, remover
    mosquito.onclick = function () {
        this.remove()
    }

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


