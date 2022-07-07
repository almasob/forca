var divJogo = document.querySelector(".jogo");

var divPalavraSecreta = document.querySelector(".jogo__forca-palavra-div");

var novoJogo = document.querySelector(".jogo__btns-novo");
var desistir = document.querySelector(".jogo__btns-desistir");

var letrasBox = document.querySelectorAll(".letras-box");

var letrasApertadas = [];


novoJogo.addEventListener("click",function(){
	if (palavrasJogo.length > 0){
			sortearPalavra();
			pintaTecladoVerde();
			limpaApertadas();
			erros = 0;
			acertos = 0;
			mudarForca();
			tiraMensagem();
			colocaTeclado();
			esconderSecreta();
	}else{
		alert("As palavras acabaram, volte e adicione mais para continuar jogando!");
		divPalavraSecreta.innerHTML="";
		tiraTeclado();
		esconderSecreta();

	}

	

})

desistir.addEventListener("click",function(){ 
	ficaInvisivel(divJogo);
	tiraInvisivel(divInicial);
	pintaTecladoVerde();
	limpaApertadas();
	erros = 0;
	acertos = 0;
	mudarForca();
	tiraMensagem();
	colocaTeclado();
	esconderSecreta();

	
})

/* --------------------- TECLADO --------------------*/

function letraApertada(letra){
	var palavraEscondida = document.querySelectorAll(".jogo__forca-letras");
	var letraApertei = letra.textContent.toUpperCase();
	var esteBotao = letra;
	var acertou = false;

		if(!letrasApertadas.includes(letraApertei)){
			for(i=0; i < palavraEscondida.length; i++){
				var letraEscondida = palavraEscondida[i];
					if(letraEscondida.textContent == letraApertei ){
						letraEscondida.style.color = "black";
						letraEscondida.classList.add("jogo__forca-sombra");
						acertos++;
						acertou = true;
					}
			}
				letrasApertadas.push(letraApertei);
				if(!acertou){
					erros++;
					mudarForca();
				}

		}else{
			alert("Letra ja utilizada!")
		}

	esteBotao.style.backgroundColor = "red";

		if(acertos == palavraEscondida.length){
			colocaGanhou();
		};

}



function pintaTecladoVerde(){
	for(i = 0; i<letrasBox.length;i++)
	letrasBox[i].style.backgroundColor="#00ff00";
}

function limpaApertadas(){
	letrasApertadas = [];
}




