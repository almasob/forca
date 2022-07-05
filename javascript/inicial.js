var divInicial = document.querySelector(".inicial");
var btnAleatorio = document.querySelector(".inicial__btns-aleatorio");
var btnAdicionar = document.querySelector(".inicial__btns-adicionar");
var btnIniciar = document.querySelector(".inicial__btns-iniciar");

btnAleatorio.addEventListener("click",function(){
	ficaInvisivel(btnAleatorio);
	tiraInvisivel(btnIniciar);
	palavrasJogo.push("futebol","cachorro","minhoca","macarronada","orangotango","felicidade","sensacional");
})

btnAdicionar.addEventListener("click",function(){
	ficaInvisivel(divInicial);
	tiraInvisivel(divAdicionar);
	
})

btnIniciar.addEventListener("click",function(){
	ficaInvisivel(divInicial);
	tiraInvisivel(divJogo);
	sortearPalavra();

})

