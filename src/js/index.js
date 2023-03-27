const weLost = new Audio('https://assets.mixkit.co/active_storage/sfx/2961/2961-preview.mp3')
let tituloDaPagina = document.title

window.addEventListener('blur', () => {
    document.title = "Volte para esta guia! :C"
})

window.addEventListener('focus', () => {
    document.title = "Você voltou!"
})

  //game

  let personagem = document.querySelector('.personagem')
  let quadrado = document.querySelector('.quadrado')
  let contador = 0;

  function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
        contador++;
        document.querySelector('.score').innerHTML = contador;
    }

    setTimeout(function(){
       personagem.classList.remove('animar') 
    }, 500)
  }


  var testarColisao = setInterval(function(){
    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )

    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )

    if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 130){
     quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        weLost.play()
        alert( `Parece que você perdeu, tente novamente! Seu score: ${contador}`)
        window.location.reload();
        

    }
  }, 10)




