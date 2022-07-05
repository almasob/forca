var divJogo = document.querySelector(".jogo");

var divPalavraSecreta = document.querySelector(".jogo__forca-palavra-div");

var novoJogo = document.querySelector(".jogo__btns-novo");
var desistir = document.querySelector(".jogo__btns-desistir");


novoJogo.addEventListener("click",function(){
	if (palavrasJogo.length > 0){
		sortearPalavra();
	}else{
		alert("As palavras acabaram, volte e adicione mais para continuar jogando!");
		divPalavraSecreta.innerHTML="";
	}
	

})

desistir.addEventListener("click",function(){ 
})



/*adicionar a class jogo__forca-letras em cada div da letra */

