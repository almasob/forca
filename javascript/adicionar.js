var divAdicionar = document.querySelector(".adicionar");
var palavraAdicionar = document.querySelector(".adicionar__texto-area");
var adicionarPalavra = document.querySelector(".adicionar__btns-adicionar");
var adicionarVoltar = document.querySelector(".adicionar__btns-voltar");

adicionarPalavra.addEventListener("click",function(){
	if(palavraAdicionar.value.length > 0){
		palavrasJogo.push(palavraAdicionar.value);
		palavraAdicionar.value = "";
	} else{
		alert("Escreva uma palavra!")
	}

	palavraAdicionar.focus();
})


adicionarVoltar.addEventListener("click",function(){
	ficaInvisivel(divAdicionar);
	tiraInvisivel(divInicial);

	if(palavrasJogo.length > 0){
		tiraInvisivel(btnIniciar);
	}
})

