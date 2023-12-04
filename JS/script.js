let foto = document.querySelector('div#imagem1')
let toptitulo = document.querySelector('title#toptitle')
let cabecalho = document.querySelector('h1#normal')
let titulo = document.querySelector('h2#titulo')
let descricao = document.querySelector('p#descricao')
let secao = document.querySelector('section#container')
let amogusSoundEffect = document.querySelector('audio#amogus')
let cont = 0
function sobreImagem() {
    toptitulo.innerHTML = 'PROBLEMAS À VISTA'
    cabecalho.innerHTML = 'ALMA CORROMPIDA'
    titulo.innerHTML = 'Negro Negro'
    descricao.innerHTML = '- Um ser corrompido, que busca aterrorizar almas'
    amogusSoundEffect.play()
    if (cont == 0) {
        function botaoDeProsseguir() {
            const continuar = document.createElement('a')
            continuar.setAttribute('href', 'pages/pag002.html')
            continuar.text = 'Continuar'
            continuar.style.textDecoration = 'none'
            continuar.style.width = '300px'
            continuar.style.textAlign = 'center'
            continuar.style.border = '2px solid white'
            continuar.style.padding = '20px'
            continuar.style.borderRadius = '5px'
            continuar.style.display = 'block'
            continuar.style.margin =  'auto'
            continuar.style.backgroundColor = 'rgb(70, 70, 70)'
            continuar.style.color = 'white'
            continuar.style.boxShadow = '0px 0px 10px 5px white'
            continuar.style.textShadow = '0px 0px 5px white'
            secao.appendChild(continuar)
            }
        setTimeout(botaoDeProsseguir, 3000)
        cont ++
    } else {
    }
}

function foraImagem() {
    toptitulo.innerHTML = 'Apenas um homem comum...'
    cabecalho.innerHTML = 'APENAS UM HOMEM COMUM'
    titulo.innerHTML = 'Joseph'
    descricao.innerHTML = '- Um homem comum, alegre, que ama jogar seus videogames'
    amogusSoundEffect.pause()
    amogusSoundEffect.currentTime = 0
}

