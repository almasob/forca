var divJogo = document.querySelector(".jogo");

var divPalavraSecreta = document.querySelector(".jogo__forca-palavra-div");

var novoJogo = document.querySelector(".jogo__btns-novo");
var desistir = document.querySelector(".jogo__btns-desistir");

var letrasBox = document.querySelectorAll(".letras-box");

var letrasApertadas = [];


novoJogo.addEventListener("click",function(){
	if (palavrasJogo.length > 0){
		sortearPalavra();
	}else{
		alert("As palavras acabaram, volte e adicione mais para continuar jogando!");
		divPalavraSecreta.innerHTML="";
	}
	pintaTecladoVerde();
	limpaApertadas();
	

})

desistir.addEventListener("click",function(){ 
	ficaInvisivel(divJogo);
	tiraInvisivel(divInicial);
	pintaTecladoVerde();
	limpaApertadas();

	
})

/* --------------------- TECLADO --------------------*/

function letraApertada(letra){
	var palavraEscondida = document.querySelectorAll(".jogo__forca-letras");
	var letraApertei = letra.textContent.toUpperCase();
	var esteBotao = letra;

		if(!letrasApertadas.includes(letraApertei)){
			for(i=0; i < palavraEscondida.length; i++){
				var letraEscondida = palavraEscondida[i];
					if(letraEscondida.textContent == letraApertei ){
						letraEscondida.style.color = "black";
					}
			}
			letrasApertadas.push(letraApertei)

		}else{
			alert("Letra ja utilizada!")
		}

	


	esteBotao.style.backgroundColor = "red";
}



function pintaTecladoVerde(){
	for(i = 0; i<letrasBox.length;i++)
	letrasBox[i].style.backgroundColor="#00ff00";
}

function limpaApertadas(){
	letrasApertadas = [];
}




